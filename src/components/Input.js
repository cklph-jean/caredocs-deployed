import classNames from "classnames";
import { useState } from "react";
import { TextInput, View, Picker } from 'react-native';

export default function Input({ value, placeholder, ...rest }) {
    const [selectedCountryCode, setSelectedCountryCode] = useState('+63');

    // conditional class here 
    const inputClasses = classNames(
        rest.className,
        "placeholder: px-[16px] py-[12px] bg-white border-[1px] border-[#E6E6E6] text-[14px] placeholder-gray-400 placeholder:font-[400] placeholder:text-[14px] focus:outline-none block w-full h-[44px]",
        {
            "rounded-[5px]": !rest.customRadius,
            "rounded-r-[5px]": rest.inputType == 'phone'
        }
    );

    const countryCodes = [ // for testing purposes for now
        { label: '+1', value: '+1' },
        { label: '+44', value: '+44' },
        { label: '+63', value: '+63' },
    ];

    const handleCountryCodeChange = (itemValue, itemIndex) => {
        setSelectedCountryCode(itemValue);
        if (rest.onChangeCountryCode) {
            rest.onChangeCountryCode(itemValue);
        }
    };

    const renderedCountryCodes = countryCodes.map((code, index) => (
        <Picker.Item key={index} label={code.label} value={code.value} />
    ))

    return (
        <View className="relative flex flex-row justify-center">

            {
                (rest.inputType == 'phone' && rest.onChangeCountryCode) && (
                    <Picker
                        className="border-[1px] border-gray-50 bg-gray-50 px-[12px] py-[9px] text-[14px] leading-[20px]  bg-slate"
                        selectedValue={selectedCountryCode}
                        onValueChange={handleCountryCodeChange}
                    >
                        {renderedCountryCodes}
                    </Picker>
                )
            }

            <TextInput
                {...rest}
                className={inputClasses}
                value={value}
                placeholder={placeholder}
            />

            {
                // You can pass any event on icon prop ( e.g. onPress() )
                rest.icon && (
                    <View className="absolute inset-y-0 right-0 flex flex-row items-center p-[14px] text-secondary">
                        {rest.icon}
                    </View>
                )
            }
        </View>
    )
}
