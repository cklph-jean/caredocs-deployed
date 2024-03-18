import FacilityIcon from "../../assets/svg/dashboard/FacilityIcon.svg"
import SwitchIcon from "../../assets/svg/dashboard/SwitchIcon.svg"
import { View, Image, Text, Pressable } from "react-native";
import Button from "../Button";
import useToggle from "../../hooks/useToggle";
import { useState } from "react";
import useFacilityStore from "../../store/apis/caredocs/facility/facilityStore";

export const facilities = [
    {
        id: 1,
        icon: FacilityIcon,
        name: 'Harmonious Place'
    },
    {
        id: 2,
        icon: FacilityIcon,
        name: 'Opportunity Haven'
    },
    {
        id: 3,
        icon: FacilityIcon,
        name: 'Employment Empowerment Hub'
    },
    {
        id: 4,
        icon: FacilityIcon,
        name: 'Workforce Wellness Shelter'
    },
    {
        id: 5,
        icon: FacilityIcon,
        name: 'New Beginnings Work Hub'
    },
    {
        id: 6,
        icon: FacilityIcon,
        name: 'Job Ready Center'
    }
];

const findFacilityNameById = (id) => {
    const facility = facilities.find(facility => facility.id === id);
    return facility ? facility.name : null;
}

export default function FacilityDetails(
    // { activeFacility = 0 }
) {

    const [isShowFacilities, handleToggleFacilities] = useToggle(true);
    const { activeFacility, setActiveFacility } = useFacilityStore();


    const handleActiveFacility = (facilityId, facilityName) => {
        // setIsActive(facilityId);
        setActiveFacility(facilityId, facilityName)
        handleToggleFacilities();
    }

    const renderedFacilities = facilities.map((item, index) => {
        return (
            <Pressable
                key={index}
                className={`p-[8px] ${activeFacility == item.id ? 'bg-secondary-ocean' : ''} rounded-[6px] flex-row items-center`}
                onPress={() => handleActiveFacility(item.id, item.name)}
                style={{ gap: '6px' }}>

                <Image source={FacilityIcon} tintColor="#6EBBE2" className="w-[16px] h-[16px]" />
                {/* {item.icon} */}

                <Text className="font-tt-commons-medium text-[12px] text-[#6EBBE2]">
                    {item.name}
                </Text>
            </Pressable>
        )
    })

    return <>
        <View className="relative">
            <View className="p-[8px] rounded-[12px] w-[208px] bg-white flex flex-row items-center" style={{ gap: '12px' }}>

                <View className="p-[7px] w-[48px] h-[48px] items-center justify-center bg-primary/20 rounded-[10.5px]">
                    <Image source={FacilityIcon} tintColor={'#26C8B8'} />
                </View>

                <View style={{ gap: '8px' }}>
                    <Text className="leading-[20px] font-tt-commons-medium text-[14px]">
                        {
                            findFacilityNameById(activeFacility)
                        }
                    </Text>


                    <View className="flex-row items-center" style={{ gap: '4px' }}>
                        <Image
                            source={SwitchIcon}
                        />

                        <Button onPress={handleToggleFacilities}>
                            <Text className="font-tt-commons-medium text-[12px] text-primary">
                                Switch Facility
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>

            {
                !isShowFacilities &&
                (
                    <View className="z-[999] w-full bg-white custom-shadow-md p-[8px] absolute top-full rounded-[8px]" style={{ gap: '8px' }}>
                        {renderedFacilities}
                    </View>
                )
            }
        </View>
    </>
}
