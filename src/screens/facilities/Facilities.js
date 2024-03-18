import { Text, View, Image, Pressable } from "react-native";
import AdminLayout from "../../layout/AdminLayout";
import Button from "../../components/Button";
import AddIconWhite from "../../assets/svg/AddIconWhite.svg";
import ImportIconGreen from "../../assets/svg/ImportIconGreen.svg";
import FacilityTile from "./FacilityTile";

export default function Facilities() {
  const data = [
    {
      id: "1234",
      name: "Harmonious place",
      residents: [
        {
          id: "1",
        },
        {
          id: "1",
        },
      ],
    },
    {
      id: "1234",
      name: "Opportunity Haven",
      residents: [
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
      ],
    },
    {
      id: "1234",
      name: "Opportunity Haven",
      residents: [
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
      ],
    },
    {
      id: "1234",
      name: "Opportunity Haven",
      residents: [
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
      ],
    },
  ];

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
      <View className="mt-[16px] flex flex-row  flex-wrap mr-[-24px] justify-between">
        {data.map((item) => {
          console.log(1);
          return <FacilityTile facility={item} />;
        })}
      </View>
    </AdminLayout>
  );
}
