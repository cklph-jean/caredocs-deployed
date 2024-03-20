import { View, Image } from "react-native";
import UserDetails from "../UserDetails";
import LogoImage from '../../assets/svg/Logo.svg';
import FacilityDetails from "./FacilityDetails";
import SideMenu from "./SideMenu";

export default function SideBar({ navigation }) {

    return (
        <View className="px-[24px] w-[242px] bg-gradient-to-br from-white/10 via-white/40 to-white/60 custom-shadow-md">
            <View className="sticky top-0">

                <View className="pt-[32px] pb-[16px] items-center">
                    <Image
                        source={LogoImage}
                        alt="Caredocs Logo"
                    />
                </View>

                <View className="pt-[32px] items-center z-[1]" style={{ gap: '24px' }}>
                    <UserDetails />

                    <FacilityDetails />

                    {/* Side Menus */}
                    <View className="w-full z-[-1]">
                        {<SideMenu navigation={navigation} />}
                    </View>
                </View>
            </View>
        </View>
    )
}
