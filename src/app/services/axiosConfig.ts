// axiosConfig.ts
import axios from 'axios';
import { authService } from './authService';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
});

let isRefreshing = false;
let failedQueue: {
    resolve: (value?: unknown) => void;
    reject: (reason?: any) => void;
}[] = [];

const processQueue = (error: any | null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });
    failedQueue = [];
};

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        // @ts-ignore
        if (!config.headers.Authorization) {
            const token = authService.getAccessToken();
            if (token) {
                // @ts-ignore
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error is not 401 or we've already tried to refresh, reject
        if (error.response?.status !== 401 || originalRequest._retry) {
            return Promise.reject(error);
        }

        // If we're not logged in at all, reject immediately
        if (!authService.getAccessToken() || !authService.getRefreshToken()) {
            return Promise.reject(error);
        }

        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            })
                .then(() => {
                    return instance(originalRequest);
                })
                .catch((err) => {
                    return Promise.reject(err);
                });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            await authService.refreshToken();
            const token = authService.getAccessToken();
            if (token) {
                originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            processQueue(null);
            return instance(originalRequest);
        } catch (refreshError) {
            processQueue(refreshError);
            authService.clearTokens();
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false;
        }
    }
);


// Add request logging in development
if (process.env.NODE_ENV === 'development') {
    instance.interceptors.request.use(request => {
        console.log('Starting Request:', {
            method: request.method,
            url: request.url,
            headers: request.headers
        });
        return request;
    });

    instance.interceptors.response.use(
        response => {
            console.log('Response:', {
                status: response.status,
                headers: response.headers
            });
            return response;
        },
        error => {
            
            console.log('Response Error:', {
                status: error.response?.status,
                headers: error.response?.headers,
                data: error.response?.data,
                error: error
            });
            
            return Promise.reject(error);
        }
    );
}

export default instance;