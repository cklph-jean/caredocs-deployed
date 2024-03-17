import { Text, View, Image, Pressable } from "react-native";
import AdminLayout from "../../layout/AdminLayout";
import Button from "../../components/Button";
import AddIconWhite from "../../assets/svg/AddIconWhite.svg";
import ImportIconGreen from "../../assets/svg/ImportIconGreen.svg";
import Person1 from "../../assets/svg/Person1.png";
import FacilityIcon from "../../assets/svg/Avatar.svg";
import EllipsisGreen from "../../assets/svg/EllipsisGreen.svg";

export default function Facilities() {
  return (
    <AdminLayout>
      <View className="flex flex-row justify-between">
        <Text className="text-[28px] font-tt-commons-medium">Facilities</Text>
        <View className="flex flex-row">
          <Button secondary>
            <Image source={ImportIconGreen} className="mr-[6px]" />
            Import From CSV File
          </Button>
          <Button primary className="ml-[24px]">
            <Image source={AddIconWhite} className="mr-[6px]" />
            Create New Facility
          </Button>
        </View>
      </View>
      <View className="border border-black mt-[16px]">
        <View className="w-[330px] rounded-[12px] py-[32px] px-[23px] bg-white">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center">
              <Image source={FacilityIcon} />
              <View className="ml-[12px] flex-shrink flex flex-column justify-center w-[180px]">
                <Text className="text-[18px] font-[600] text-black-900 ">
                  Harmonious place
                </Text>
                <Text className="text-gray-400">14 Residents</Text>
              </View>
            </View>
            <Pressable>
              <Image source={EllipsisGreen} />
            </Pressable>
          </View>
          <View className="flex flex-row justify-between py-[16px] mt-[32px]">
            <Image source={Person1} className="w-[40px] h-[40px]" />
            <Image source={Person1} className="w-[40px] h-[40px]" />
            <Image source={Person1} className="w-[40px] h-[40px]" />
            <Image source={Person1} className="w-[40px] h-[40px]" />
            <Image source={Person1} className="w-[40px] h-[40px]" />
            <Text className="w-[40px] h-[40px] border border-violet-300 text-violet-300 font-[16px] rounded-[6px] justify-center flex items-center">
              +9
            </Text>
          </View>
        </View>
      </View>
    </AdminLayout>
  );
}
