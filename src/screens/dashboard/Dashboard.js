import { Text, View } from "react-native";
import AdminLayout from "../../layout/AdminLayout";

export default function Dashboard() {
    return (
        <AdminLayout>
            <View>
                <Text className="text-[28px] font-tt-commons-medium">
                    Dashboard
                </Text>
            </View>
        </AdminLayout>
    )
}