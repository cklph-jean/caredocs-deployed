import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'; // import the necessary navigation hook


export default function MenuButton({ menu, children, handleOnPress, ...rest }) {
    const navigation = useNavigation(); // hook into the navigation object

    const iconActiveColor = '#B693F8';

    const handlePress = () => {
        handleOnPress();

        if (menu?.screenName) {
            navigation.navigate(menu.screenName);
        }
    }

    return (
        <Pressable
            onPress={handlePress}
            className={`flex py-[16px] z-[1] rounded-[6px] relative ${menu?.actionContent ? '' : 'flex-row'}`}>

            <View className="flex-row items-center justify-between w-full" style={{ gap: '12px' }}>
                <Image source={menu.icon} className="w-[24px] h-[24px]" tintColor={menu.screenName == rest.activeMenu ? iconActiveColor : '#4D4D4D'} />

                <View className="flex-auto flex-row items-center justify-between">
                    <Text className={`font-tt-commons-medium text-[14px] ${menu.screenName == rest.activeMenu ? 'text-purple' : ''}`}>
                        {menu.name}
                    </Text>
                </View>

                {menu?.action && menu.action}
            </View>

            {rest.isOpenDropDownSettings && menu?.actionContent && menu?.actionContent}
        </Pressable>
    )

}