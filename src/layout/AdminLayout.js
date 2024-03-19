import { View } from "react-native";
import SideBar from "../components/SideBar/SideBar";

export default function AdminLayout({ children }) {
    return (
        <View className="min-h-screen justify-center ">
            <View className="flex flex-row h-full w-full">
                <SideBar />

                <View className='flex-auto flex-col'>
                    {/* NavBar */}
                    {children}
                </View>
            </View>
        </View>
    )
}
