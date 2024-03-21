import { View, Text, Image } from 'react-native'
import AdminLayout from '../../../layout/AdminLayout'
import FormCard from '../../../components/FormCard'
import Button from '../../../components/Button'
import SaveIcon from "../../../assets/svg/SaveIcon.svg"
import StaffForm from '../../../components/Staff/StaffForm'
import PageTitleComponent from '../../../components/PageTitleComponent'

export default function CreateStaff({ navigation }) {
  return (
    <AdminLayout>
      <View className="flex-row h-full px-[70px]" style={{ gap: '10px' }}>
        <View className="flex flex-auto flex-col my-[32px]" style={{ gap: '24px' }}>
          <View className="flex flex-row justify-between items-center">
            {/* Title */}
            <PageTitleComponent title="Create Staff" />

          </View>

          <FormCard>
            {/* Toolbar */}
            <View className="flex flex-row justify-end items-center px-[24px] pb-[24px] pt-[16px]">
              <View className="flex flex-row" style={{ gap: 10 }}>
                <Button
                  secondary
                  className="px-[18px]"
                  onPress={() => navigation.navigate('staff')}>
                  <Text className="font-sans font-[600]">
                    Cancel
                  </Text>
                </Button>

                <Button onPress={() => navigation.navigate('staff')} primary className="px-[18px] flex flex-col items-center">
                  <Image
                    source={SaveIcon}
                  />
                  <Text className="font-sans font-[600] text-white pl-[6px]">
                    Save Staff
                  </Text>
                </Button>
              </View>
            </View>
            {/* Toolbar */}

            <StaffForm manage="create" />

          </FormCard>
        </View>
      </View>
    </AdminLayout>
  )
}