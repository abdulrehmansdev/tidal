// @/app/services/checkoutService.ts

import axios from '@/app/services/axiosConfig';
import type { CheckoutFormData, Timeslot } from '@/app/types/types';
import { getOrderData, storeOrderData } from '@/app/utils/orderUtils';

interface OrderRequest {
    selectedTimeSlot: Timeslot;
    checkoutData: CheckoutFormData;
}

interface OrderError {
    memberNames: string[];
    errorMessage: string;
}

interface CreateOrderResponse {
    success: boolean;
    orderId: number | null;
    userId: string | null;
    errors: OrderError[];
}

interface UpdateOrderResponse {
    success: boolean;
    orderId: number | null;
    userId: string | null;
    errors: OrderError[];
}

interface PaymentVerificationResponse {
    success: boolean;
    orderId?: string;
    userId?: string;
    error?: string;
    iCal?: string;
}

export interface OrderConfirmationResponse {
    orderInfo: {
        orderId: number;
        orderStatusName: string;
    };
    product: Array<{
        name: string;
        duration: string;
    }>;
    selectedTimeslot: {
        starts: string;
        ends: string;
    };
    provider: {
        latitude: number;
        longitude: number;
        name: string;
        addressLine1: string;
        city: string;
        postCode: string;
        serviceTeamContactName: string;
        serviceTeamContactNumber: string;
    };
}

class CheckoutService {
    async createOrder(): Promise<CreateOrderResponse> {
        if (typeof window === 'undefined') throw new Error('Cannot create order on server side');

        try {
            const storedTimeSlot = localStorage.getItem('selectedTimeSlot');
            const storedCheckoutData = localStorage.getItem('checkoutData');

            if (!storedTimeSlot || !storedCheckoutData) {
                throw new Error('Required checkout data not found in localStorage');
            }

            // Parse the stored data
            const timeSlot = JSON.parse(storedTimeSlot);
            const checkoutData = JSON.parse(storedCheckoutData);
            const modifiedCheckoutData = {
                ...checkoutData,
                guardianDateOfBirth: checkoutData.guardianDateOfBirth === "" ? null : checkoutData.guardianDateOfBirth
            };

            const orderData = {
                selectedTimeSlot: timeSlot,
                checkoutData: modifiedCheckoutData
            };

            const response = await axios.post<CreateOrderResponse>('/order', orderData);

            // If successful, store the checkout data with the order ID for future updates
            if (response.data.success && response.data.orderId) {
                storeOrderData(response.data.orderId.toString(), modifiedCheckoutData);
            }

            return response.data;

        } catch (error: any) {
            if (error.response?.data) {
                return error.response.data;
            }
            return {
                success: false,
                orderId: null,
                userId: null,
                errors: [{
                    memberNames: [],
                    errorMessage: error.message || 'An unexpected error occurred'
                }]
            };
        }
    }

    async updateOrder(orderId: string, updatedData: Partial<CheckoutFormData>): Promise<UpdateOrderResponse> {
        if (typeof window === 'undefined') throw new Error('Cannot update order on server side');

        try {
            // Get the stored time slot
            const storedTimeSlot = localStorage.getItem('selectedTimeSlot');
            if (!storedTimeSlot) {
                throw new Error('Time slot data not found in localStorage');
            }

            // Get current checkout data from localStorage
            const currentData = getOrderData(orderId);
            if (!currentData) {
                throw new Error('Order data not found in localStorage');
            }

            // Merge the current data with updates
            const mergedData = {
                ...currentData,
                ...updatedData,
                guardianDateOfBirth: updatedData.guardianDateOfBirth === "" ? null : updatedData.guardianDateOfBirth || currentData.guardianDateOfBirth
            };

            // Store updated data in localStorage
            storeOrderData(orderId, mergedData);

            // Prepare data for API call
            const timeSlot = JSON.parse(storedTimeSlot);
            const orderData = {
                selectedTimeSlot: timeSlot,
                checkoutData: mergedData,
                orderId: orderId,
                userId: localStorage.getItem('userId') || null
            };

            // Make API call to update the order
            const response = await axios.put<UpdateOrderResponse>(`/order/${orderId}`, orderData);

            return response.data;
        } catch (error: any) {
            console.error('Error updating order:', error);
            if (error.response?.data) {
                return error.response.data;
            }
            return {
                success: false,
                orderId: null,
                userId: null,
                errors: [{
                    memberNames: [],
                    errorMessage: error.message || 'An unexpected error occurred during update'
                }]
            };
        }
    }

    async cancelPendingOrder(): Promise<CreateOrderResponse> {
        if (typeof window === 'undefined') throw new Error('Cannot cancel order on server side');

        try {
            const pendingOrderId = localStorage.getItem('pendingOrderId');
            const userId = localStorage.getItem('userId');

            if (!pendingOrderId) {
                throw new Error('No pending order found');
            }

            if (!userId) {
                throw new Error('User ID not found');
            }

            const response = await axios.post<CreateOrderResponse>(`/order/${pendingOrderId}/cancel`, {
                userId
            });

            // If successful, clean up localStorage
            if (response.data.success) {
                localStorage.removeItem(`orderData-${pendingOrderId}`);
            }

            return response.data;
        } catch (error: any) {
            if (error.response?.data) {
                return error.response.data;
            }
            return {
                success: false,
                orderId: null,
                userId: null,
                errors: [{
                    memberNames: [],
                    errorMessage: error.message || 'An unexpected error occurred'
                }]
            };
        }
    }

    async verifyPayment(token: { token: string }): Promise<PaymentVerificationResponse> {
        if (typeof window === 'undefined') throw new Error('Cannot process payment on server side');

        try {
            const pendingOrderId = localStorage.getItem('pendingOrderId');

            const response = await axios.post<PaymentVerificationResponse>(
                '/order/verify-payment',
                {
                    sourceId: token.token,
                    orderId: pendingOrderId,
                }
            );

            const result = response.data;

            console.log(result);

            if (result.success) {
                // Clear checkout data
                localStorage.removeItem('pendingOrderId');
                localStorage.removeItem('selectedTimeSlot');
                localStorage.removeItem(`orderData-${pendingOrderId}`);

                // Store completed order information
                localStorage.setItem('completedOrderId', result.orderId || '');
                localStorage.setItem('completedUserId', result.userId || '');
                localStorage.setItem('completedOrderICal', result.iCal || '');
            }

            return result;
        } catch (error: any) {
            console.error('Payment verification error:', error);
            return {
                success: false,
                error: error.message || 'An unexpected error occurred during payment verification'
            };
        }
    }

    async getOrderConfirmation(orderId: string, userId: string): Promise<OrderConfirmationResponse> {
        if (typeof window === 'undefined') throw new Error('Cannot get order confirmation on server side');

        try {
            const response = await axios.get<OrderConfirmationResponse>(
                `/order/${orderId}/confirmation/${userId}`
            );

            const result = response.data;
            console.log(result);
            return result;
        } catch (error: any) {
            if (error.response?.data) {
                return error.response.data;
            }

            return error.response;
        }
    }
}

export const checkoutService = new CheckoutService();