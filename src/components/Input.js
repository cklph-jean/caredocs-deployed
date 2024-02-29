import classNames from "classnames";
import { TextInput, View } from 'react-native';

export default function Input({ value, placeholder, ...rest }) {

    // conditional class here 
    const inputClasses = classNames(
        rest.className,
        "px-[16px] py-[12px] mt-[4px] bg-white border-[1px] border-[#E6E6E6] rounded-[5px] w-[356px] text-[14px] placeholder-[#A0A0A0] placeholder:font-[400] placeholder:text-[14px] focus:outline-none block w-full h-[44px]",
    );

    return (
        <View className="relative">
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
