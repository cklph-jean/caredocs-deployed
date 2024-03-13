import { Image, Text, View } from "react-native";
import { facilities } from "../SideBar/FacilityDetails";
import Button from "../Button";
import { Fragment, useState } from "react";

export default function FacilityButton() {

  const [isActive, setIsActive] = useState(0);

  const handleActiveFacility = (index) => {
    setIsActive(index)
  }

  return (
    <View className="flex mt-[20px]">
      <View className="flex-row overflow-auto"
      style={{gap: '12px'}}>
        {
          facilities.map((facility, index) => {

            return <Fragment key={index}>
              {
                index === isActive ? (
                  <Button
                    className="px-[16px] py-[8px]"
                    circle
                    primary
                    textClass="font-tt-commons-medium flex items-center text-[14px]"
                    onPress={() => handleActiveFacility(index)}
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
                    onPress={() => handleActiveFacility(index)}
                  >
                    <Image source={facility.icon} tintColor="#4D4D4D" className="w-[16px] h-[16px] mr-[8px]" />
                    {facility.name}
                  </Button>
                )
              }
            </Fragment>
          })
        }
      </View>

    </View>
  )
}
