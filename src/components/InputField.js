import { View, Text } from "react-native";
import Input from "./Input";

export default function InputField({ 
    label, 
    placeholder,
    value,
    ...rest
}) {

    return (
        <View style={{gap:'4px'}}>
            <Text className="text-[14px] text-secondary">
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
