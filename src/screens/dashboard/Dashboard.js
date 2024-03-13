import { Text, View } from "react-native";
import AdminLayout from "../../layout/AdminLayout";
import FacilityButton from "../../components/Facilities/FacilityButton";

export default function Dashboard() {
    return (
        <AdminLayout>
            <View className="flex flex-col">
                <View className="flex flex-row justify-between">
                    {/* Title */}
                    <Text className="text-[28px] font-tt-commons-medium">
                        Dashboard
                    </Text>

                    {/* Toolbar Section */}
                    <View>
                        {/* Toolbar Buttons Here */}
                    </View>
                    {/* Toolbar Section */}
                </View>

                <View className="">
                    <FacilityButton />
                </View>
            </View>
        </AdminLayout>
    )
}