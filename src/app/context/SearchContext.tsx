'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '@/app/utils/localStorage';
import {GooglePlacesLocation} from "@/app/types/types";

export interface SearchFilters {
    radius?: number;
    dateFrom?: string;
    daysOfWeek?: number[];
}

interface SearchContextType {
    results: any[];
    isLoading: boolean;
    error: string | null;
    location: GooglePlacesLocation | null;
    filters: SearchFilters;
    setResults: (results: any[]) => void;
    setIsLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setLocation: (location: GooglePlacesLocation | null) => void;
    setFilters: (filters: SearchFilters) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        
    const [results, setResults] = useState<any[]>(() =>
        getStorageItem('searchResults', [])
    );
    
    const [isLoading, setIsLoading] = useState(false);
    
    const [error, setError] = useState<string | null>(null);
    
    const [location, setLocation] = useState<GooglePlacesLocation | null>(() =>
        getStorageItem('searchLocation', null)
    );
    
    const [filters, setFilters] = useState<SearchFilters>(() =>
        getStorageItem('searchFilters', {})
    );

    
    useEffect(() => {

        if (location) {
            setStorageItem('searchLocation', location);
        }
        
        setStorageItem('searchResults', results);
        setStorageItem('searchFilters', filters);

    }, [results, location, filters]);

    
    const value = {
        results,
        isLoading,
        error,
        location,
        filters,
        setResults,
        setIsLoading,
        setError,
        setLocation,
        setFilters,
    };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};