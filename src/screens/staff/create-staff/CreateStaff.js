import { View, Text, Image } from 'react-native'
import AdminLayout from '../../../layout/AdminLayout'
import Card from "../../../components/Card"
import Button from '../../../components/Button'
import SaveIcon from "../../../assets/svg/SaveIcon.svg"
import GalleryIcon from "../../../assets/svg/GalleryIcon.svg"

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


          <Card className="bg-white px-[48px] py-[32px] rounded-[12px] custom-shadow-md">
            <View className="flex flex-col justify-end items-end px-[24px] pb-[24px] pt-[16px]">
              <View className="flex flex-row" style={{ gap: 10 }}>
                <Button
                  secondary
                  className="px-[18px]"
                >
                  <Text>
                    Cancel
                  </Text>
                </Button>
                <Button primary className="px-[18px] flex flex-col items-center">
                  <Image
                    source={SaveIcon}
                  />
                  <Text className="font-tt-commons-medium font-bold pl-[6px]">
                    Save Staff
                  </Text>
                </Button>
              </View>
            </View>

            <View className="py-[12px] px-[24px] flex-row">
              <View className="w-[218px]">
                <View className="w-[170px] h-[170px] p-[55px] rounded-full bg-purple/20 text-purple">
                  <Image
                    source={GalleryIcon}
                    tintColor="#B693F8"
                    className="w-[60px] h-[60px]"
                  />
                </View>
              </View>

              <View className="flex-auto">
                <View className="flex flex-row justify-center items-center" style={{ gap: '16px' }}>
                  <View className="border-b w-[40%] border-gray-50"></View>
                  <Text className="text-center italic text-[#A0A0A0]"> Basic Information </Text>
                  <View className="border-b w-[40%] border-gray-50"></View>
                </View>
              </View>

            </View>
          </Card>

        </View>
      </View>
    </AdminLayout>
  )
}