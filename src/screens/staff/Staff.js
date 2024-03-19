import { Image, Text, View } from 'react-native'
import AdminLayout from '../../layout/AdminLayout'
import PlusIcon from '../../assets/svg/PlusIcon.svg'
import ImportIcon from '../../assets/svg/ImportIcon.svg'
import GenderIcon from '../../assets/svg/GenderIcon.svg'
import { FiMoreHorizontal } from "react-icons/fi";
import Button from '../../components/Button'
import Table from '../../components/Table'
import GroupIconPrimary from "../../assets/svg/GroupIconPrimary.svg"


import ProfilePic from '../../assets/svg/ProfilePic.svg'


export default function Staff() {

    const data = [
        { id: 1, name: "Delisha", team: "Director Board", phone: "+01271234567", gender: "Female" },
        { id: 2, name: "Jane Doe", team: "Afternoon Shift", phone: "+01271234567", gender: "Female" },
        { id: 4, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female" },
        { id: 5, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female" },
        { id: 6, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female" },
        { id: 7, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female" },
    ];

    const config = [
        {
            label: "Name",
            render: (staff) => {
                return (
                    <View className="flex flex-row items-center" style={{ gap: '8px' }}>
                        <Image
                            source={ProfilePic}
                            className="rounded-full w-[40px] h-[40px]" />

                        <Text className="font-tt-commons-medium font-bold ">
                            {staff.name}
                        </Text>
                    </View>
                )
            },
        },
        {
            label: "Team",
            render: (staff) => {
                return (
                    <Text className="font-tt-commons-medium text-purple text-[14px]">
                        {staff.team}
                    </Text>
                )
            },
        },
        {
            label: "Phone",
            render: (staff) => staff.phone,
        },
        {
            label: "Gender",
            header: () => {
                return <View className={`table-cell align-middle text-center py-[12px]`}>
                    <Text className=" font-tt-commons-medium font-bold">Gender</Text>
                </View>
            },
            render: (staff) => {
                return (
                    <View className="flex flex-row justify-evenly">
                        <Button className="bg-[#E7DBFD] text-purple border border-purple rounded-full px-[16px] py-[8px]">
                            <View className="flex flex-row">
                                <Image source={GenderIcon} />
                                <Text className="text-purple font-tt-commons-medium font-bold ml-[10px]">
                                    {staff.gender}
                                </Text>
                            </View>
                        </Button>

                        <Button className>
                            <FiMoreHorizontal className='w-[24px] h-[24px] ' stroke='#B693F8' />
                        </Button>
                    </View>
                )
            },
        },
    ];

    const keyFn = (staff) => {
        return staff.id;
    };

    return (
        <AdminLayout>
            <View className="flex-row h-full pl-[70px]" style={{ gap: '10px' }}>
                <View className="flex flex-auto flex-col my-[32px]" style={{ gap: '24px' }}>
                    <View className="flex flex-row justify-between items-center">
                        {/* Title */}
                        <Text className="text-[28px] font-tt-commons-medium">
                            Staff
                        </Text>

                        {/* Toolbar Section */}
                        <View className="flex flex-row" style={{ gap: '24px' }}>
                            {/* Toolbar Buttons Here */}

                            <Button
                                secondary
                                className="py-[12px] px[18px]"
                            >
                                <Image
                                    source={ImportIcon}
                                />
                                <Text className="text-[14px] pl-[6px] items-center leading-[20px]">
                                    Import  From CSV File
                                </Text>
                            </Button>

                            <Button primary className="py-[12px] px[18px]" style={{ gap: '6px' }}>

                                <Image
                                    source={PlusIcon}
                                />
                                <Text className="text-[14px] pl-[6px] items-center leading-[20px]">
                                    Create New Staff
                                </Text>
                            </Button>
                        </View>
                        {/* Toolbar Section */}
                    </View>

                    <View className="mt-[20px]">

                        <Table data={data} config={config} keyFn={keyFn} />

                    </View>
                </View>

                {/* Right Side Bar */}
                <View className="px-[32px] w-[311px] bg-white custom-shadow-md">
                    <View className="sticky top-0 flex justify-center h-full items-center" style={{ gap: 64 }}>
                        <View className="flex flex-col items-center" style={{ gap: '10px' }}>
                            <View className="bg-primary/20 p-[20px] rounded-full">
                                <Image
                                    source={GroupIconPrimary}
                                />
                            </View>

                            <Text className="font-tt-commons-medium text-[18px] font-bold">
                                No Staff Selected
                            </Text>

                            <Text className="text-center text-[16px]">
                                Click one of Staff inside the Staff List to see more information.
                            </Text>
                        </View>


                        {/* Button Group */}
                        <View className="w-full" style={{gap:16}}>

                            <Button primary className="px-[18px] py-[12px]">
                                <Image
                                    source={PlusIcon}
                                />
                                <Text className="font-tt-commons-medium text-[14px] ml-[10px]">
                                    Create New Staff
                                </Text>
                            </Button>

                            <Button secondary className="px-[18px] py-[12px]">
                                <Image
                                    source={ImportIcon}
                                />
                                <Text className="font-tt-commons-medium text-[14px] pl-[6px] items-center leading-[20px]">
                                    Import  From CSV File
                                </Text>
                            </Button>

                        </View>
                    </View>
                </View>

            </View>
        </AdminLayout>
    )
}
