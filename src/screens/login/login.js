import { Image, Text, View } from "react-native";
import WelcomeIcon from "../../assets/svg/Welcome.svg"


export default function Login() {
  return (

    <View
      className={`font-sans bg-[url('./src/assets/svg/bgImage.png')] bg-cover flex-1 items-center w-full justify-center`}>
      <View className="flex flex-row flex-wrap justify-between w-full items-center px-20">

        {/* Left Area */}
        <View className="flex-1">
          <View className="shrink-0 bg-white px-[40px] py-[20px] w-[624px] rounded-[31px]">
            <View className="flex flex-row items-center">
              <Text className="text-[32px] font-normal">
                Welcome, <Text className="font-bold">You</Text>
              </Text>

              <Image
                source={WelcomeIcon}
                className="w-[54px] h-[54px] ml-[20px]"
                alt={'welcom-icon'}
              />
            </View>
          </View>

          <View className="mt-32">
            <Text>
              Find Your Caredocs
            </Text>
          </View>
        </View>

        {/* Right Area */}
        <View className="flex-1 flex-col items-center self-stretch">
          <Text>Login Form</Text>
        </View>
      </View>
    </View>
  )
}