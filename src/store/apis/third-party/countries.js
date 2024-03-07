import { create } from 'zustand';
import { API_COUTNRIES } from '../../../config';
import axios from 'axios';

const BASE_URL = API_COUTNRIES.BASE_URL;

const useCountriesStore = create((set) => ({
    countries: [],
    fetchCountries: async () => {
        try {
            const response = await fetch(`${BASE_URL}${API_COUTNRIES.ALL}`);

            if (!response.ok) {
                throw new Error('Failed to fetch countries');
            }
            const data = await response.json();

            console.log(data);
            set({ countries: data });
        } catch (error) {
            console.error(error);
        }
    },
}));

const useCitiesStore = create((set) => ({
    cities: [],
    fetchCities: async (countryName = null) => {
        try {
            if (countryName) { // all cities based on country
                let data = JSON.stringify({
                    "order": "asc",
                    "orderBy": "name",
                    "country": countryName
                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${BASE_URL}${API_COUTNRIES.CITIES}/`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        set({ cities: JSON.stringify(response.data) })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                // all cities
                const response = await fetch(`${BASE_URL}${API_COUTNRIES.CITIES}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }
                const data = await response.json();
                set({ cities: data });
            }



        } catch (error) {
            console.error(error);
        }
    },
}));

export { useCountriesStore, useCitiesStore };