// services/contentService.ts
import clientAxios from '@/app/services/axiosConfig';
import serverAxios from '@/app/services/serverAxiosConfig';

interface AdditionalContents {
    id: number;
    name: string;
    slug: string;
}

export interface Content extends AdditionalContents {
    description: string;
    additionalContents: AdditionalContents[];
}



class ContentService {
    private getAxiosInstance() {
        return typeof window === 'undefined' ? serverAxios : clientAxios;
    }

    async getContentBySlug(slug: string): Promise<Content> {
        try {
            if (!slug) {
                throw new Error('Slug parameter is required');
            }

            const axios = this.getAxiosInstance();
            const response = await axios.get<Content>(`/content/${slug}`);

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getAllContent(): Promise<Content[]> {
        try {
            const axios = this.getAxiosInstance();
            const response = await axios.get<Content[]>('/content');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export const contentService = new ContentService();