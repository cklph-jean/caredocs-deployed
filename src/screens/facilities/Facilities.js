import { Text, View, Image } from "react-native";
import AdminLayout from "../../layout/AdminLayout";
import Button from "../../components/Button";
import AddIconWhite from "../../assets/svg/AddIconWhite.svg";
import ImportIconGreen from "../../assets/svg/ImportIconGreen.svg";

export default function Facilities() {
  return (
    // <View>
    //     <Text>
    //         Facilities
    //     </Text>
    // </View>
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
    </AdminLayout>
  );
}
