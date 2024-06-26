import { View, Text, Image } from 'react-native'
import { useState } from 'react';
import AdminLayout from '../../../layout/AdminLayout'
import FormCard from '../../../components/FormCard'
import DeleteConfirmationModal from '../../../components/DeleteConfirmationModal';
import DeleteIcon from "../../../assets/svg/DeleteIconRed.svg";
import SaveIcon from "../../../assets/svg/SaveIcon.svg"
import Button from '../../../components/Button';
import StaffForm from '../../../components/Staff/StaffForm';
import PageTitleComponent from '../../../components/PageTitleComponent';
import useDeleteModal from '../../../hooks/useDeleteModal';

export default function EditStaff({ navigation }) {
   
    const { isDeleteModalShow, handleModalClose, handleModalOpen } = useDeleteModal();

    const handleDeleteStaff = () => {
        handleModalClose();
        navigation.navigate('staff')
    };

    return (
        <AdminLayout>
            <View className="flex-row h-full px-[70px]" style={{ gap: '10px' }}>
                <View className="flex flex-auto flex-col my-[32px]" style={{ gap: '24px' }}>
                    <View className="flex flex-row justify-between items-center">
                        {/* Title */}
                       <PageTitleComponent title="Edit Staff: John Salvatore Doe"/>
                    </View>

                    <FormCard>
                        {/* Toolbar */}
                        <View className="flex flex-row justify-end items-center px-[24px] pb-[24px] pt-[16px]">
                            <View className="flex flex-row" style={{ gap: 10 }}>
                                <Button
                                    secondary
                                    className="px-[18px]"
                                    onPress={() => navigation.navigate('staff')}>
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
                                        Delete This Staff
                                    </Text>
                                </Button>

                                <Button onPress={() => navigation.navigate('staff')} primary className="px-[18px] flex flex-col items-center">
                                    <Image
                                        source={SaveIcon}
                                    />
                                    <Text className="font-sans font-[600] text-white pl-[6px]">
                                        Save Staff
                                    </Text>
                                </Button>
                            </View>
                        </View>
                        {/* Toolbar */}

                        <StaffForm manage="edit" />

                    </FormCard>
                </View>
            </View>

            {
                isDeleteModalShow &&
                (
                    <DeleteConfirmationModal
                        handleClose={handleModalClose}
                        handleDelete={handleDeleteStaff}
                        showModal={isDeleteModalShow}
                    />
                )
            }
        </AdminLayout>
    )
}