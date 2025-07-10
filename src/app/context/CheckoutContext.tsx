'use client';

// src/app/context/CheckoutContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem, removeStorageItem } from '@/app/utils/localStorage';
import { CheckoutFormData } from '@/app/types/types';


// context/CheckoutContext.tsx
const initialCheckoutData: CheckoutFormData = {
    title: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    guardianTitle: '',
    guardianFirstName: '',
    guardianLastName: '',
    guardianDateOfBirth: null
};

interface CheckoutContextType {
    checkoutData: CheckoutFormData;
    setCheckoutData: (data: Partial<CheckoutFormData>) => void;
    clearCheckoutData: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);


export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [checkoutData, setCheckoutDataState] = useState<CheckoutFormData>(() =>
        getStorageItem('checkoutData', initialCheckoutData)
    );

    useEffect(() => {
        setStorageItem('checkoutData', checkoutData);
    }, [checkoutData]);

    const setCheckoutData = (data: Partial<CheckoutFormData>) => {
        setCheckoutDataState(prev => ({
            ...prev,
            ...data
        }));
    };

    const clearCheckoutData = () => {
        setCheckoutDataState(initialCheckoutData);
        removeStorageItem('checkoutData');
    };

    return (
        <CheckoutContext.Provider value={{ checkoutData, setCheckoutData, clearCheckoutData }}>
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (context === undefined) {
        throw new Error('useCheckout must be used within a CheckoutProvider');
    }
    return context;
};