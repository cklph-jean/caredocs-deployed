import { View, Text } from "react-native";
import Input from "./Input";

export default function InputField({
    label,
    placeholder,
    value,
    ...rest
}) {

    return (
        <View style={{ gap: label ? '4px' : 0 }}>
            <Text className="text-[14px] text-[#828282]">
                {label}
            </Text>

            <Input
                placeholder={placeholder}
                value={value}
                {...rest}
            />
        </View>
    )
}
