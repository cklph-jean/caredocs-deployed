import { View, Text } from 'react-native'
import Input from './Input'


export default function DateInput({ label, placeholderDD, placeholderMM, placeholderYY }) {
    return (
        <View className="" style={{ gap: 4 }}>
            <Text className="text-[14px] text-[#828282]">{label}</Text>
            <View className="grid grid-cols-3" style={{ gap: 8 }}>
                <Input placeholder={placeholderDD} value="" />
                <Input placeholder={placeholderMM} value="" />
                <Input placeholder={placeholderYY} value="" />
            </View>
        </View>
    );
}
