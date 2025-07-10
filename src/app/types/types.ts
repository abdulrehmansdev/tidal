export interface Timeslot {
    starts: string;
    ends: string;
    serviceId: number;
    city: string;
    distanceInMiles: number;
    providerName: string;
    productNames: string[];
    isAvailable: boolean;
}

export interface TimeslotSearchParams {
    Latitude: number;
    Longitude: number;
    RadiusInMiles?: number;
    DateFrom?: string;
    DaysOfWeek?: string[];
    SearchText?: string;
}

export interface SearchResponse {
    timeslots: Timeslot[];
    total: number;
}


// represents the Location object from google placesApi
export interface GooglePlacesLocation {
    streetNumber: string;
    route: string;
    postalTown: string;
    county: string;
    state: string;
    country: string;
    postcode: string;
    latitude: number;
    longitude: number;
    displayName: string;
    shortFormattedAddress: string;
    formattedAddress: string;
}


export interface CheckoutFormData {
    title: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    guardianTitle?: string;
    guardianFirstName?: string;
    guardianLastName?: string;
    guardianDateOfBirth?: string | null;
    termsAgreed?: boolean;
}

// google place results
export interface GooglePlaceAddressComponent {
    longText: string;
    types: string[];
}

export interface GooglePlace {
    displayName?: {
        text: string;
    };
    formattedAddress?: string;
    shortFormattedAddress?: string;
    location?: {
        latitude: number;
        longitude: number;
    };
    addressComponents?: GooglePlaceAddressComponent[];
}

export interface GooglePlacesResponse {
    places: GooglePlace[];
}


