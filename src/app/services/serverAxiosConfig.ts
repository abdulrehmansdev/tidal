// services/serverAxiosConfig.ts
import axios from 'axios';

const isServer = typeof window === 'undefined';

const serverInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    ...(isServer && {
        httpsAgent: new (require('https').Agent)({
            rejectUnauthorized: false, // Ignore SSL errors in Node.js
        }),
    }),
});

// Simplified interceptors for server-side
serverInstance.interceptors.request.use(
    (config) => {
        // Add any server-side specific headers here if needed
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default serverInstance;