import { Image, Text, View } from 'react-native'
import AdminLayout from '../../layout/AdminLayout'
import PlusIcon from '../../assets/svg/PlusIcon.svg'
import ImportIcon from '../../assets/svg/ImportIcon.svg'
import Button from '../../components/Button'

import StaffList from '../../components/Staff/StaffList'
import StaffRightSideBar from '../../components/Staff/StaffRightSideBar'

export default function Staff({ navigation }) {

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
                                className="py-[12px] px-[18px]"
                            >
                                <Image
                                    source={ImportIcon}
                                />
                                <Text className="text-[14px] font-sans font-[600] pl-[6px] items-center leading-[20px]">
                                    Import  From CSV File
                                </Text>
                            </Button>

                            <Button
                                onPress={() => navigation.navigate('create-staff')}
                                primary
                                className="py-[12px] px[18px]"
                                style={{ gap: '6px' }}>

                                <Image
                                    source={PlusIcon}
                                />
                                <Text className="text-[14px] pl-[6px] items-center leading-[20px] font-sans font-[600] text-white">
                                    Create New Staff
                                </Text>
                            </Button>
                        </View>
                        {/* Toolbar Section */}
                    </View>

                    <View className="mt-[20px]">
                        <StaffList />
                    </View>
                </View>

                {/* Right Side Bar */}
                <StaffRightSideBar />
                {/* Right Side Bar */}

            </View>
        </AdminLayout>
    )
}
