import { Image, Text, View } from "react-native";
import ProfilePic from '../assets/svg/ProfilePic.svg'


export default function UserDetails({ data }) {
    return (
        <View className="w-[182px] rounded-[12px] bg-white flex justify-center items-center">

            <View className="mt-[32px]">
                <Image
                    source={ProfilePic}
                    alt={'Static Avatar'}
                    className="w-[56px] h-[56px]"
                />
            </View>

            <View className="items-center my-[16px]">
                <Text className="text-[16px] font-bold font-tt-commons-medium leading-6">
                    Delisha
                </Text>

                <Text className="leading-[18px] text-[12px] text-gray-500">
                    Director Board
                </Text>

                <Text className="leading-[18px] text-[12px] text-gray-500">
                    Founder & CEO
                </Text>
            </View>
        </View>
    )
}
