import { Image, View } from "react-native";
import { facilities } from "../SideBar/FacilityDetails";
import Button from "../Button";

export default function FacilityButton({ facility, ...rest }) {

  return (
    <>
      {
        rest.isActive ? (
          <Button
            className="px-[16px] py-[8px]"
            circle
            primary
            textClass="font-tt-commons-medium flex items-center text-[14px]"
            onPress={() => rest.handlePressFacility(facility.id)}
          >
            <Image source={facility.icon} tintColor='white' className="w-[16px] h-[16px] mr-[8px]" />
            {facility.name}
          </Button>
        ) : (
          <Button
            className="px-[16px] py-[8px]"
            circle
            white
            textClass="font-tt-commons-medium text-gray-500 flex items-center  text-[14px]"
            onPress={() => rest.handlePressFacility(facility.id)}
          >
            <Image source={facility.icon} tintColor="#4D4D4D" className="w-[16px] h-[16px] mr-[8px]" />
            {facility.name}
          </Button>
        )
      }
    </>
  )
}
