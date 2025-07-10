import axios from '@/app/services/axiosConfig';
import {GooglePlace, GooglePlacesResponse, SearchResponse, TimeslotSearchParams, GooglePlacesLocation} from "@/app/types/types";
import {getStorageItem} from "@/app/utils/localStorage";


class SearchService {
    private readonly googleMapsApiKey: string;

    constructor() {
        this.googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    }

    validateSearchParams(params: TimeslotSearchParams): string | null {
        const now = new Date();

        if (params.Latitude < -90 || params.Latitude > 90) {
            return "Latitude must be between -90 and 90 degrees";
        }

        if (params.Longitude < -180 || params.Longitude > 180) {
            return "Longitude must be between -180 and 180 degrees";
        }

        if (params.RadiusInMiles && (params.RadiusInMiles < 1 || params.RadiusInMiles > 100)) {
            return "Radius must be between 1 and 100 miles";
        }
        
        // if (params.DateFrom && new Date(params.DateFrom) < new Date(now.setHours(0, 0, 0, 0))) {
        //     return "Start date cannot be in the past";
        // }

        return null;
    }

    async searchTimeslots(params: TimeslotSearchParams): Promise<SearchResponse> {
        
        // Apply default values matching C# model
        const searchParams = {
            ...params,
            RadiusInMiles: params.RadiusInMiles ?? 20,
        };
        
        // Validate parameters
        const validationError = this.validateSearchParams(searchParams);
        if (validationError) {
            throw new Error(validationError);
        }

        // Calculate end date if dateFrom is provided
        let endDate: string | undefined;
        
        if (searchParams.DateFrom) {
            let date = new Date(searchParams.DateFrom);
            
            if(date < new Date()){
                date = new Date();
                searchParams.DateFrom = new Date().toISOString();
            }
            
            date.setDate(date.getDate() + 30);
            endDate = date.toISOString();
        }

        // Create URLSearchParams to properly handle the array parameter
        const queryParams = new URLSearchParams();
        
        // Add basic parameters
        queryParams.append('Latitude', searchParams.Latitude.toString());
        queryParams.append('Longitude', searchParams.Longitude.toString());
        queryParams.append('RadiusInMiles', searchParams.RadiusInMiles.toString());
        queryParams.append('SearchText', searchParams.SearchText ?? "");        
        
        if (searchParams.DateFrom) {
            queryParams.append('DateFrom', searchParams.DateFrom);
        }
        if (endDate) {
            queryParams.append('DateTo', endDate);
        }

        // Add each day of week as a separate parameter with the same key
        if (searchParams.DaysOfWeek?.length) {
            searchParams.DaysOfWeek.forEach(day => {
                queryParams.append('DaysOfWeek', day.toString());
            });
        }

        const response = await axios.get<SearchResponse>('/services/build-timeslots-for-nearby-providers', {
            params: queryParams
        });

        return response.data;
    }



    async searchPlaces(query: string): Promise<GooglePlacesLocation[]> {
        if (!query) {
            return [];
        }

        const response = await fetch(
            'https://places.googleapis.com/v1/places:searchText',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': this.googleMapsApiKey,
                    'X-Goog-FieldMask': [
                        'places.displayName',
                        'places.formattedAddress',
                        'places.location',
                        'places.addressComponents',
                        'places.shortFormattedAddress'
                    ].join(',')
                },
                body: JSON.stringify({
                    textQuery: query,
                    languageCode: "en",
                    maxResultCount: 5,
                    locationBias: {
                        rectangle: {
                            low: { latitude: 49.8644, longitude: -7.7211 },
                            high: { latitude: 58.7721, longitude: 1.7642 }
                        }
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json() as GooglePlacesResponse;

        return (data.places || []).map((place: GooglePlace): GooglePlacesLocation => {
            const getAddressComponent = (type: string): string =>
                place.addressComponents?.find((component) =>
                    component.types.includes(type))?.longText || '';

            return {
                streetNumber: getAddressComponent('street_number'),
                route: getAddressComponent('route'),
                postalTown: getAddressComponent('postal_town'),
                county: getAddressComponent('administrative_area_level_2'),
                state: getAddressComponent('administrative_area_level_1'),
                country: getAddressComponent('country'),
                postcode: getAddressComponent('postal_code'),
                latitude: place.location?.latitude || 0,
                longitude: place.location?.longitude || 0,
                displayName: place.displayName?.text || '',
                shortFormattedAddress: place.shortFormattedAddress || '',
                formattedAddress: place.formattedAddress || ''
            };
        });
    }
    
    
}

export const searchService = new SearchService();