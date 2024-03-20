import { View, Text } from 'react-native'
import AdminLayout from '../../../layout/AdminLayout'
import ManageStaff from '../ManageStaff'

export default function CreateStaff() {
  return (
    <AdminLayout>
      <View className="flex-row h-full px-[70px]" style={{ gap: '10px' }}>
        <View className="flex flex-auto flex-col my-[32px]" style={{ gap: '24px' }}>
          <View className="flex flex-row justify-between items-center">
            {/* Title */}
            <Text className="text-[28px] font-tt-commons-medium">
              Create Staff
            </Text>
          </View>

          <ManageStaff mange="create" />
        </View>
      </View>
    </AdminLayout>
  )
}