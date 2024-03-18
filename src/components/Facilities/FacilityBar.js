import { View, Text } from 'react-native'
import { Fragment, useState } from "react";
import { facilities } from "../SideBar/FacilityDetails";
import FacilityButton from "./FacilityButton"
import useFacilityStore from '../../store/apis/caredocs/facility/facilityStore';

export default function FacilityBar() {

    const { activeFacility, setActiveFacility } = useFacilityStore();

    const handlePressFacility = (facilityId) => {
        setActiveFacility(facilityId)
    }

    return (
        <>
            <View className="flex">
                <View className="flex-row overflow-auto pb-[12px]"
                    style={{ gap: '12px' }}>
                    {
                        facilities.map((facility, index) => {
                            const activeIndex = activeFacility == facility.id ? true : false;

                            return (
                                <Fragment key={index}>
                                    <FacilityButton facility={facility} handlePressFacility={handlePressFacility} isActive={activeIndex} />
                                </Fragment>
                            )
                        })
                    }
                </View>

            </View>
        </>
    )
}