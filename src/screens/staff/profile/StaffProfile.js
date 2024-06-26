import { View, Text, Image } from 'react-native'
import AdminLayout from '../../../layout/AdminLayout'
import FormCard from '../../../components/FormCard'
import StaffForm from '../../../components/Staff/StaffForm'
import Button from '../../../components/Button'
import ChevronLeft from "../../../assets/svg/ChevronLeft.svg";
import EditIcon from "../../../assets/svg/EditIconGreen.svg";
import PageTitleComponent from '../../../components/PageTitleComponent'


export default function StaffProfile({ navigation }) {
    return (
        <AdminLayout>
            <View className="flex-row h-full px-[70px]" style={{ gap: '10px' }}>
                <View className="flex flex-auto flex-col my-[32px]" style={{ gap: '24px' }}>
                    <View className="flex flex-row justify-between items-center">
                        {/* Title */}
                        <PageTitleComponent title="Staff Profile: John Salvatore Doe" />
                    </View>

                    <FormCard>

                        <View className="flex flex-row justify-between items-center px-[24px] pb-[24px] pt-[16px]">
                            <View>
                                <Button
                                    onPress={() => navigation.navigate('staff')}
                                    className="px-[18px] flex flex-col items-center"
                                    textClass="text-purple text-[16px] font-[600]">
                                    <Image
                                        source={ChevronLeft}
                                    />
                                    Back to Staff List
                                </Button>
                            </View>
                            <View className="flex flex-row" style={{ gap: 10 }}>
                                <Button onPress={() => navigation.navigate('edit-staff')} primary className="px-[18px] flex flex-col items-center">
                                    <Image
                                        source={EditIcon}
                                        tintColor="white"
                                    />
                                    <Text className="font-sans font-[600] text-white pl-[6px]">
                                        Edit Staff
                                    </Text>
                                </Button>
                            </View>
                        </View>


                        <StaffForm manage="profile" />
                    </FormCard>
                </View>
            </View>
        </AdminLayout>
    )
}