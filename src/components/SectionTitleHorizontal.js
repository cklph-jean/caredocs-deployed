import { View, Text } from 'react-native'

export default function SectionTitle({ title }) {
    return (
        <>
            <View className="flex flex-row justify-center items-center" style={{ gap: '16px' }}>
                <View className="border-b flex-auto border-gray-50"></View>
                <Text className="text-center italic text-[#A0A0A0] text-[12px]"> {title} </Text>
                <View className="border-b flex-auto border-gray-50"></View>
            </View>
        </>
    )
}