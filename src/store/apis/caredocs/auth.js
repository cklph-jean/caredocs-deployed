
import { create } from 'zustand';
import { axiosInstance } from "../axios";
import { API_ENDPOINTS } from "../../../config";

const useAuthStore = create((set) => ({
    user: null,
    login: async ({ ...data }) => {
        try {
            const response = await axiosInstance.post(API_ENDPOINTS, {
                user: data
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            set({ user: response.data });
        } catch (error) {
            console.error('Failed to login:', error);
        }
    },
    logout: () => set({ user: null })
}));

export default useAuthStore;
