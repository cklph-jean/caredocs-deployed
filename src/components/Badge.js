import { Text, View } from "react-native";

export default function Badge({ number }) {
    return (
        <View className="w-[24px] h-[24px] flex justify-center bg-purple rounded-lg text-center">
            <Text className="text-white text-center font-tt-commons-medium">
                {number}
            </Text>
        </View>
    )
}
