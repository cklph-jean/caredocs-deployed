import { Text, View } from "react-native";
import DropdownSelect from "./DropdownSelect";
import InputField from "./InputField";
import { useEffect, useState } from "react";

export default function BillingAddress({ cities, handleBillingAddressValues }) {
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSelectCity = (option) => {
        setCity(option);
        console.log(city);
    };

    const handleZipCode = (event) => {
        setZipCode(event.target.value)
        console.log(zipCode)
    }

    useEffect(() => {
        if (city && zipCode) {
            handleBillingAddressValues({
                city,
                zipCode
            });
        }
    }, [city, zipCode, handleBillingAddressValues]);
    return (
        <View style={{ gap: '4px' }}>
            {/* TODO MAKE COMPONENT FOR BILLING ADDRESS */}
            <Text className=" text-[14px] text-secondary">
                Billing address
            </Text>

            <View>
                <DropdownSelect
                    label="Select City"
                    options={cities}
                    onSelect={handleSelectCity} />

                <InputField
                    className="rounded-b-[5px]"
                    placeholder="Enter your zip code"
                    value={zipCode}
                    onChange={handleZipCode}
                    customRadius={true}
                />
            </View>
        </View>
    )
}
