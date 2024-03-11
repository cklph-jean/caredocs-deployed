
import { create } from 'zustand';
import axiosInstance from "../axios";
import { API_ENDPOINTS } from "../../../config";
import { removeData, storeData } from '../../../utils/asyncStorage';

const useAuthStore = create((set) => ({
    user: null,
    error: null,
    isAuthenticated: false,
    login: async ({ ...data }) => {
        try {

            const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, {
                user: data
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // store on local storage in the meantin
            storeData('token', response.data.result.jti);

            set({ isAuthenticated: true })

            set({ user: response.data });
        } catch (error) {
            set({ error: error.response.data })
            console.error('Failed to login:', error);
        }
    },

    register: async ({ ...data }) => {

        try {
            const response = await axiosInstance.post(API_ENDPOINTS.SIGNUP, {
                user: data
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.data) {
                throw new Error('Failed to fetch countries');
            }

            // should store then token somewhere

            set({ user: response.data })
        } catch (error) {
            set({ error: error.response.data })

            console.error(error);
        }

    },

    forgotPassword: async ({ ...data }) => {
        console.log(data);
    },

    logout: async () => {
        removeData('token')
        set({ user: null });
    }
}));

export default useAuthStore;
