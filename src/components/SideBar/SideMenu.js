
import AccountSettingsIcon from "../../assets/svg/dashboard/AccountSettingsIcon.svg"
import CommunicationsIcon from "../../assets/svg/dashboard/CommunicationsIcon.svg"
import ResidentialNoteIcon from "../../assets/svg/dashboard/ResidentialNoteIcon.svg"
import DashboardIcon from "../../assets/svg/dashboard/DashboardIcon.svg"
import FacilityIcon from "../../assets/svg/dashboard/FacilityIcon.svg"
import ResidentsIcon from "../../assets/svg/dashboard/ResidentsIcon.svg"
import StaffIcon from "../../assets/svg/dashboard/StaffIcon.svg"

import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native"

export default function SideMenu() {
    const [activeMenu, setActiveMenu] = useState(0);

    const iconColor = '#B693F8';

    const menus = [
        {
            id: 1,
            icon: <Image source={DashboardIcon} className="w-[24px] h-[24px]" tintColor={iconColor} />,
            name: 'Dashboard',
        },
        {
            id: 2,
            icon: <Image source={CommunicationsIcon} className="w-[24px] h-[24px]" tintColor={'#4D4D4D'} />,
            name: 'Communication',
            notification: ''
        },
        {
            id: 3,
            icon: <Image source={ResidentialNoteIcon} className="w-[24px] h-[24px]" tintColor={'#4D4D4D'} />,
            name: 'Residential Notes'
        },
        {
            id: 4,
            icon: <Image source={ResidentsIcon} className="w-[24px] h-[24px]" tintColor={'#4D4D4D'} />,
            name: 'Residents'
        },
        {
            id: 5,
            icon: <Image source={StaffIcon} className="w-[24px] h-[24px]" tintColor={'#4D4D4D'} />,
            name: 'Staff'
        },
        {
            id: 6,
            icon: <Image source={FacilityIcon} className="w-[24px] h-[24px]" tintColor={'#4D4D4D'} />,
            name: 'Facilities'
        },
        {
            id: 7,
            icon: <Image source={AccountSettingsIcon} className="w-[24px] h-[24px]" tintColor={'#4D4D4D'} />,
            name: 'Account',
            action: ''
        },
    ];

    const renderedMenus = menus.map((menu, index) => {

        return (
            <View className="flex py-[16px] z-[1]" key={index}>
                <Pressable 
                    className="rounded-[6px] flex-row items-center" 
                    style={{ gap: '12px' }}>

                    {menu.icon}

                    <Text className={`font-tt-commons-medium text-[14px] ${index == activeMenu ? 'text-purple' : ''}`}>
                        {menu.name}
                    </Text>
                </Pressable>
            </View>
        )
    })

    return renderedMenus;
}
