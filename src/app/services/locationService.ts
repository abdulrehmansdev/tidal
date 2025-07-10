// services/locationService.ts
import clientAxios from '@/app/services/axiosConfig';
import serverAxios from '@/app/services/serverAxiosConfig';



interface AdditionalLocation {
    id: number;
    name: string;
    slug: string;
}

export interface Location extends AdditionalLocation {
    description: string;
    radius: number;
    latitude: number;
    longitude: number;
    additionalLocations: AdditionalLocation[];
}



class LocationService {
    private getAxiosInstance() {
        return typeof window === 'undefined' ? serverAxios : clientAxios;
    }

    async getLocationBySlug(slug: string): Promise<Location> {
        try {
            if (!slug) {
                throw new Error('Slug parameter is required');
            }

            const axios = this.getAxiosInstance();
            const response = await axios.get<Location>(`/locations/${slug}`);

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getAllLocations(): Promise<Location[]> {
        try {
            const axios = this.getAxiosInstance();
            const response = await axios.get<Location[]>('/locations');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export const locationService = new LocationService();