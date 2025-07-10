// @/app/utils/orderUtils.ts

import type { CheckoutFormData } from '@/app/types/types';

/**
 * Stores order data in localStorage
 * @param orderId The ID of the order
 * @param data The order data to store
 */
export const storeOrderData = (orderId: string, data: CheckoutFormData): void => {
    try {
        localStorage.setItem(`orderData-${orderId}`, JSON.stringify(data));
    } catch (error) {
        console.error('Error storing order data:', error);
    }
};

/**
 * Retrieves order data from localStorage
 * @param orderId The ID of the order to retrieve
 * @returns The order data, or null if not found
 */
export const getOrderData = (orderId: string): CheckoutFormData | null => {
    try {
        const data = localStorage.getItem(`orderData-${orderId}`);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error retrieving order data:', error);
        return null;
    }
};

/**
 * Updates order data in localStorage
 * @param orderId The ID of the order to update
 * @param updates Partial updates to apply to the order data
 * @returns The updated order data, or null if the operation failed
 */
export const updateOrderData = (orderId: string, updates: Partial<CheckoutFormData>): CheckoutFormData | null => {
    try {
        const existingData = getOrderData(orderId);
        if (!existingData) return null;

        const updatedData = { ...existingData, ...updates };
        storeOrderData(orderId, updatedData);

        return updatedData;
    } catch (error) {
        console.error('Error updating order data:', error);
        return null;
    }
};

/**
 * Removes order data from localStorage
 * @param orderId The ID of the order to remove
 */
export const removeOrderData = (orderId: string): void => {
    try {
        localStorage.removeItem(`orderData-${orderId}`);
    } catch (error) {
        console.error('Error removing order data:', error);
    }
};