
import AccountSettingsIcon from "../../assets/svg/dashboard/AccountSettingsIcon.svg"
import CommunicationsIcon from "../../assets/svg/dashboard/CommunicationsIcon.svg"
import ResidentialNoteIcon from "../../assets/svg/dashboard/ResidentialNoteIcon.svg"
import DashboardIcon from "../../assets/svg/dashboard/DashboardIcon.svg"
import FacilityIcon from "../../assets/svg/dashboard/FacilityIcon.svg"
import ResidentsIcon from "../../assets/svg/dashboard/ResidentsIcon.svg"
import StaffIcon from "../../assets/svg/dashboard/StaffIcon.svg"
import ChevronDown from "../../assets/svg/dashboard/ChevronDown.svg"
import ChevronUp from "../../assets/svg/dashboard/ChevronUp.svg"
import LogoutIcon from "../../assets/svg/dashboard/Logout.svg"

import Badge from "../Badge"
import MenuButton from "./MenuButton"
import useToggle from "../../hooks/useToggle"

import { useEffect, useState } from "react";
import { Image, View } from "react-native"
import { useRoute } from '@react-navigation/native';



export default function SideMenu() {

    const route = useRoute();

    const [activeMenu, setActiveMenu] = useState('');
    const [notifCount, setNotifCount] = useState(5);
    const [isOpenDropDownSettings, handleDropdownSettings] = useToggle(false);

    useEffect(() => {
        setActiveMenu(route.name);
    }, [route, setActiveMenu]);

    const accountSettingsMenu = [
        {
            id: 1,
            icon: StaffIcon,
            name: 'Edit My Profile',
        },
        {
            id: 2,
            icon: AccountSettingsIcon,
            name: 'Account Settings',
        },
        {
            id: 3,
            icon: LogoutIcon,
            name: 'Logout',
        },
    ]

    const renderedAccountSettingsMenu = accountSettingsMenu.map((menu, index) => {
        return <MenuButton
            key={index}
            activeMenu={activeMenu}
            menu={menu}
            handleOnPress={() => alert(`Should go to > ${menu.name} Page`)} />
    })

    const accountSettingsActionContent = (
        <View className="w-full px-[12px] pt-[8px]">
            {renderedAccountSettingsMenu}
        </View>
    )

    const menus = [
        {
            id: 1,
            icon: DashboardIcon,
            name: 'Dashboard',
            screenName: 'dashboard'
        },
        {
            id: 2,
            icon: CommunicationsIcon,
            name: 'Communication',
            screenName: 'communication',
            action: <Badge number={notifCount} />
        },
        {
            id: 3,
            icon: ResidentialNoteIcon,
            name: 'Residential Notes',
            screenName: 'residential-notes',
        },
        {
            id: 4,
            icon: ResidentsIcon,
            name: 'Residents',
            screenName: 'residents',
        },
        {
            id: 5,
            icon: StaffIcon,
            name: 'Staff',
            screenName: 'staff',
        },
        {
            id: 6,
            icon: FacilityIcon,
            name: 'Facilities',
            screenName: 'facilities',
        },
        {
            id: 7,
            icon: AccountSettingsIcon,
            name: 'Account',
            action: <Image source={!isOpenDropDownSettings ? ChevronDown : ChevronUp} />,
            actionContent: accountSettingsActionContent
        },
    ];

    const renderedMenus = menus.map((menu, index) => {

        const handleOnPress = async () => {
            if (menu.id == 7) { // check if account settings
                handleDropdownSettings()
            }
        }

        return <MenuButton
            key={index}
            activeMenu={activeMenu}
            isOpenDropDownSettings={isOpenDropDownSettings}
            menu={menu}
            handleOnPress={handleOnPress}
            navigation={navigation}
        />
    })


    return <>
        {renderedMenus}
    </>;
}
