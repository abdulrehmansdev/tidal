// ToastService.ts
import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading';

export const useToast = () => {
    // Helper function to show toast notifications
    const showToast = (type: ToastType, message: string, options?: ToastOptions) => {
        // Handle loading type separately since it's not a native type in react-toastify
        if (type === 'loading') {
            return toast.info(message, {
                isLoading: true,
                autoClose: false,
                closeOnClick: false,
                draggable: false,
                ...options
            });
        }

        // For other types, directly use toast[type]
        return toast[type](message, options);
    };

    // Function to update an existing toast (useful for loading -> success/error transitions)
    const updateToast = (toastId: number | string, type: Exclude<ToastType, 'loading'>, message: string, options?: ToastOptions) => {
        toast.update(toastId, {
            render: message,
            type,
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
            draggable: true,
            ...options
        });
    };

    // Convenience methods for common toast types
    const success = (message: string, options?: ToastOptions) => showToast('success', message, options);
    const error = (message: string, options?: ToastOptions) => showToast('error', message, options);
    const info = (message: string, options?: ToastOptions) => showToast('info', message, options);
    const warning = (message: string, options?: ToastOptions) => showToast('warning', message, options);
    const loading = (message: string, options?: ToastOptions) => showToast('loading', message, options);

    return {
        showToast,
        updateToast,
        success,
        error,
        info,
        warning,
        loading
    };
};