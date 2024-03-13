import { Image, Pressable, Text, View } from "react-native";

export default function MenuButton({ menu, children, handleOnPress, ...rest }) {

    const iconActiveColor = '#B693F8';

    return (
        <Pressable
            onPress={handleOnPress}
            className={`flex py-[16px] z-[1] rounded-[6px] relative ${menu?.actionContent ? '' : 'flex-row'}`}>

            <View className="flex-row items-center justify-between w-full" style={{ gap: '12px' }}>
                <Image source={menu.icon} className="w-[24px] h-[24px]" tintColor={menu.id == rest.activeMenu ? iconActiveColor : '#4D4D4D'} />

                <View className="flex-auto flex-row items-center justify-between">
                    <Text className={`font-tt-commons-medium text-[14px] ${menu.id == rest.activeMenu ? 'text-purple' : ''}`}>
                        {menu.name}
                    </Text>
                </View>

                {menu?.action && menu.action}
            </View>
            
            {rest.isOpenDropDownSettings && menu?.actionContent && menu?.actionContent}
        </Pressable>
    )

}