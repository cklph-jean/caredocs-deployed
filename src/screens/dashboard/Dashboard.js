import { Text, View } from "react-native";
import AdminLayout from "../../layout/AdminLayout";

export default function Dashboard() {
    return (
        <AdminLayout>
            <View className="flex flex-row justify-between">
                {/* Title */}
                <Text className="text-[28px] font-tt-commons-medium">
                    Dashboard
                </Text>

                {/* Toolbar Section */}
                <View>
                    Toolbar Buttons Here
                </View>
            </View>
        </AdminLayout>
    )
}