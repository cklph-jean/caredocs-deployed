import { Text, View, Image, Pressable } from "react-native";
import AdminLayout from "../../layout/AdminLayout";
import Button from "../../components/Button";
import AddIconWhite from "../../assets/svg/AddIconWhite.svg";
import ImportIconGreen from "../../assets/svg/ImportIconGreen.svg";
import FacilityTile from "./FacilityTile";
import PageTitleComponent from "../../components/PageTitleComponent";

export default function Facilities({ navigation }) {
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
      <View className=" px-[70px] my-[32px]">

        <View className="flex flex-row justify-between">
          <PageTitleComponent title="Facilities"/>

          <View className="flex flex-row">
            <Button secondary>
              <Image source={ImportIconGreen} className="mr-[6px]" />
              Import From CSV File
            </Button>

            <Button onPress={() => navigation.navigate('create-facility') } primary className="ml-[24px]">
              <Image source={AddIconWhite} className="mr-[6px]" />
              Create New Facility
            </Button>
          </View>
        </View>
        {/* <View className="mt-[16px] flex flex-row flex-wrap mr-[-24px] justify-between 3xl:justify-start"> */}
        <View className="mt-[16px] flex flex-row flex-wrap justify-start lg:justify-between 2xl:justify-start" style={{gap:24}}>
          {data.map((item, index) => {
            return <FacilityTile facility={item} key={index} />;
          })}
        </View>
      </View>

    </AdminLayout>
  );
}
