import { Text, View, SafeAreaView, Alert } from "react-native";
import Button from "../../components/Button";

export default function ComponentsPage() {
    return (
        <SafeAreaView className="flex lg:max-w-screen-xl max-w-full max-h-screen h-full mx-5 md:mx-auto items-center my-20" style={{ gap: '10px' }}>
            <Text className="text-2xl font-bold">
                Welcome to CareDocs Components Page
            </Text>

            <View className="mx-auto mt-5" style={{ gap: '10px' }}>
                <Text className="font-normal text-lg">
                    Buttons
                </Text>


                <View className="flex flex-row flex-wrap" style={{ gap: '10px' }}>
                    <Button 
                        primary 
                        rounded 
                        className="px-3 py-3" 
                        textColor="text-white"
                        onPress={() => Alert.alert('Simple Button pressed')}
                        >
                        Primary Button
                    </Button>

                    <Button secondary rounded className="px-3 py-3" textColor="text-white">
                        Secondary Button
                    </Button>

                    <Button danger rounded className="px-3 py-3" textColor="text-white">
                        Danger Button
                    </Button>

                    <Button success rounded className="px-3 py-3" textColor="text-white">
                        Success Button
                    </Button>

                </View>

                <Text className="font-normal text-lg">
                    Text Inputs
                </Text>

                <View className="flex flex-row" style={{ gap: '10px' }}>

                </View>
            </View>
        </SafeAreaView>
    )
}
