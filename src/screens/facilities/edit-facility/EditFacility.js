import { View, Text, Image } from 'react-native'
import { useState } from 'react';
import AdminLayout from '../../../layout/AdminLayout'
import FormCard from '../../../components/FormCard'
import SaveIcon from '../../../assets/svg/SaveIcon.svg';
import DeleteIcon from '../../../assets/svg/DeleteIconRed.svg';
import Button from '../../../components/Button';
import FacilityForm from '../../../components/Facilities/FacilityForm';
import DeleteConfirmationModal from '../../../components/DeleteConfirmationModal';
import PageTitleComponent from '../../../components/PageTitleComponent';
import ChevronLeft from "../../../assets/svg/ChevronLeft.svg";
import useDeleteModal from '../../../hooks/useDeleteModal';


export default function EditFacility({ navigation }) {

    const { isDeleteModalShow, handleModalClose, handleModalOpen } = useDeleteModal();

    const handleDeleteFacility = () => {
        handleModalClose();

        navigation.navigate('facilities')
    }


    return (
        <AdminLayout>
            <View className="flex-row h-full px-[70px]" style={{ gap: '10px' }}>
                <View className="flex flex-auto flex-col my-[32px]" style={{ gap: '24px' }}>
                    <View className="flex flex-row justify-between items-center">
                        {/* Title */}
                        <PageTitleComponent title="Edit Facility: Opportunity Haven" />
                    </View>

                    {/* Call Form Card */}

                    <FormCard>
                        {/* Toolbar */}
                        <View className="flex flex-row justify-between items-center pb-[24px] pt-[16px]">
                            <View>
                                <Button
                                    onPress={() => navigation.navigate('facilities')}
                                    className="flex flex-col items-center"
                                    textClass="text-purple text-[16px] font-[600]">
                                    <Image
                                        source={ChevronLeft}
                                    />
                                    Back to Facility List
                                </Button>
                            </View>
                            <View className="flex flex-row" style={{ gap: 10 }}>
                                <Button
                                    secondary
                                    className="px-[18px]"
                                    onPress={() => navigation.navigate('facilities')}>
                                    <Text className="font-sans font-[600]">
                                        Cancel
                                    </Text>
                                </Button>

                                <Button
                                    danger
                                    className="px-[18px]"
                                    onPress={handleModalOpen} >
                                    <Image
                                        source={DeleteIcon}
                                        tintColor='white'
                                        className="w-[16px] h-[16px]"
                                    />
                                    <Text className="font-sans font-[600] text-white pl-[6px]">
                                        Delete This Facility
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

            {
                isDeleteModalShow &&
                (
                    <DeleteConfirmationModal
                        handleClose={handleModalClose}
                        handleDelete={handleDeleteFacility}
                        showModal={isDeleteModalShow}
                    />
                )
            }
        </AdminLayout>
    )
}