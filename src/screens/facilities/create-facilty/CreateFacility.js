import { View, Text, Image } from 'react-native'
import AdminLayout from '../../../layout/AdminLayout'
import FormCard from '../../../components/FormCard'
import SaveIcon from '../../../assets/svg/SaveIcon.svg';
import Button from '../../../components/Button';
import FacilityForm from '../../../components/Facilities/FacilityForm';

export default function CreateFacility({ navigation }) {
    return (
        <AdminLayout>
            <View className="flex-row h-full px-[70px]" style={{ gap: '10px' }}>
                <View className="flex flex-auto flex-col my-[32px]" style={{ gap: '24px' }}>
                    <View className="flex flex-row justify-between items-center">
                        {/* Title */}
                        <Text className="text-[28px] font-tt-commons-medium">
                            Create Facility
                        </Text>
                    </View>

                    {/* Call Form Card */}

                    <FormCard>
                        {/* Toolbar */}
                        <View className="flex flex-row justify-end items-center px-[24px] pb-[24px] pt-[16px]">
                            <View className="flex flex-row" style={{ gap: 10 }}>
                                <Button
                                    secondary
                                    className="px-[18px]"
                                    onPress={() => navigation.navigate('facilities')}>
                                    <Text className="font-sans font-[600]">
                                        Cancel
                                    </Text>
                                </Button>

                                <Button onPress={() => navigation.navigate('facilities')} primary className="px-[18px] flex flex-col items-center">
                                    <Image
                                        source={SaveIcon}
                                    />
                                    <Text className="font-sans font-[600] text-white pl-[6px]">
                                        Save Facility
                                    </Text>
                                </Button>
                            </View>
                        </View>
                        {/* Toolbar */}

                        <FacilityForm manage="create" />

                    </FormCard>
                </View>

            </View>
        </AdminLayout>
    )
}