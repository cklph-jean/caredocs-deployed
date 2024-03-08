import { create } from 'zustand';
import { API_COUTNRIES } from '../../../config';
import axios from 'axios';

const BASE_URL = API_COUTNRIES.BASE_URL;

const useCountriesStore = create((set) => ({
    countries: [],
    fetchCountries: async () => {
        const COUNTRIES_API_URL = BASE_URL + API_COUTNRIES.ALL;

        try {
            const response = await axios.get( COUNTRIES_API_URL );

            if (!response.data) {
                throw new Error('Failed to fetch countries');
            }
            
            set({ countries: response.data });
        } catch (error) {
            console.error(error);
        }
    },
}));

const useCitiesStore = create((set) => ({
    cities: [],
    fetchCities: async (countryName = null) => {
        const CITIES_API_URL = BASE_URL + API_COUTNRIES.CITIES;

        try {
            if (countryName) { // all cities based on country
                let data = JSON.stringify({
                    "order": "asc",
                    "orderBy": "name",
                    "country": countryName
                });

                axios.post(CITIES_API_URL, data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                        set({ cities: JSON.stringify(response.data) });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                // all cities
                const response = await fetch(CITIES_API_URL);

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