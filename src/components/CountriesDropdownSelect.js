import { Text, View } from "react-native";
import { useCountriesStore } from "../store/apis/third-party/countries";
import DropdownSelect from "./DropdownSelect";
import { useEffect } from "react";

export default function CountriesDropdownSelect({ handleSelectCountry }) {
    const { countries, fetchCountries } = useCountriesStore();

    // Fetch countries when the component mounts
    useEffect(() => {
        fetchCountries();
    }, []);


    // Check if countries.data is an array
    if (!Array.isArray(countries.data)) {
        return <div>Loading...</div>; // or some loading indicator
    }

    const optionCountries = countries.data.map((country) => {
        return { label: country.country, value: country.iso2, cities : country.cities };
    });

    return <>
        <View className="relative z-[2]" style={{ gap: '4px' }}>
            <Text className="font-sans text-[14px] text-secondary">
                Country
            </Text>

            <DropdownSelect
                label="Select Country"
                options={optionCountries}
                onSelect={handleSelectCountry} />
        </View>
    </>
}
