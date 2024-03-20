import { View, Text, Image } from 'react-native'
import { useStaffListStore } from '../../store/apis/caredocs/staff/staffStore';
import { useNavigation } from '@react-navigation/native';
import RightSideBar from "../RightSideBar";
import GroupIconPrimary from "../../assets/svg/GroupIconPrimary.svg"
import PlusIcon from '../../assets/svg/PlusIcon.svg'
import ImportIcon from '../../assets/svg/ImportIcon.svg'
import BusinessIcon from '../../assets/svg/BusinessIcon.svg'
import PhoneIcon from '../../assets/svg/PhoneIcon.svg'
import EmailIcon from '../../assets/svg/EmailIcon.svg'
import RightArrowIcon from '../../assets/svg/RightArrowIcon.svg'
import DeleteIcon from "../../assets/svg/DeleteIconRed.svg";
import EditIcon from "../../assets/svg/EditIconGreen.svg";
import Button from '../Button';
import DeleteConfirmationModal from '../DeleteConfirmationModal';
import useDeleteModal from '../../hooks/useDeleteModal';

export default function StaffRightSideBar() {
    const navigation = useNavigation();
    const { activeRowStaff } = useStaffListStore();

    const { isDeleteModalShow, handleModalClose, handleModalOpen } = useDeleteModal();


    const handleDeleteStaff = () => {
        handleModalOpen();
    };

    let content = "";

    if (activeRowStaff) {
        content = (
            <View className="flex flex-col justify-between py-[72px] h-full w-full">
                <View className="flex flex-col" style={{ gap: '10px' }}>
                    <View className="flex items-center" style={{ gap: '16px' }}>
                        <Image
                            source={activeRowStaff.avatar}
                            alt={'Static Avatar'}
                            className="w-[112px] h-[112px] rounded-full"
                        />

                        <View className="items-center" style={{ gap: 4 }}>
                            <Text className=" font-sans font-[600] text-[22px] ">
                                {activeRowStaff.name}
                            </Text>

                            <Text className=" text-[14px]">
                                “{activeRowStaff.name}”
                            </Text>

                            <Text className=" text-[14px]">
                                Harmonious Place
                            </Text>
                        </View>
                    </View>

                    <View className="my-[32px] border-b border-gray-50"></View>

                    <View>
                        <Text className="font-sans font-bold text-[18px] mb-[24px] ">
                            Staff Info
                        </Text>

                        <View style={{ gap: 18 }}>
                            <View style={{ gap: 12 }} className="flex flex-row items-center pb-[18px] border-b border-gray-50">
                                <Image
                                    source={BusinessIcon}
                                    className="w-[16px] h-[16px]"
                                />

                                <Text className="text-[16px] text-gray-500">
                                    {activeRowStaff.team}
                                </Text>
                            </View>
                            <View style={{ gap: 12 }} className="flex flex-row items-center pb-[18px] border-b border-gray-50">
                                <Image
                                    source={PhoneIcon}
                                    className="w-[16px] h-[16px]"
                                />

                                <Text className="text-[16px] text-gray-500">
                                    {activeRowStaff.phone}
                                </Text>
                            </View>
                            <View style={{ gap: 12 }} className="flex flex-row items-center pb-[18px] border-b border-gray-50">
                                <Image
                                    source={EmailIcon}
                                    className="w-[16px] h-[16px]"
                                />

                                <Text className="text-[16px] text-gray-500">
                                    {activeRowStaff.email}
                                </Text>
                            </View>

                            <Text className="text-purple font-sans font-[600] flex justify-center items-center text-[16px]  text-center">
                                Show Full Information
                                <Image
                                    className="ml-[4px]"
                                    source={RightArrowIcon}
                                />
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ gap: 16 }}>
                    <Button
                        onPress={() => navigation.navigate('edit-staff')}
                        primary
                        className="px-[18px] py-[12px]">
                        <Image
                            source={EditIcon}
                            tintColor='white'
                            className="w-[16px] h-[16px]"
                        />

                        <Text className="pl-[6px] font-sans font-[600] text-white text-center">
                            Edit This Staff
                        </Text>
                    </Button>
                    <Button
                        danger
                        onPress={handleDeleteStaff}
                        className="px-[18px] py-[12px]">
                        <Image
                            source={DeleteIcon}
                            tintColor='white'
                            className="w-[16px] h-[16px]"
                        />
                        <Text className="font-sans font-[600] text-white pl-[6px]">
                            Delete This Staff
                        </Text>
                    </Button>
                </View>
            </View>
        )
    } else {
        content = (
            <>
                <View className="flex flex-col items-center" style={{ gap: '10px' }}>
                    <View className="bg-primary/20 p-[20px] rounded-full">
                        <Image
                            source={GroupIconPrimary}
                        />
                    </View>

                    <Text className=" text-[18px]">
                        No Staff Selected
                    </Text>

                    <Text className="text-center text-[16px]">
                        Click one of Staff inside the Staff List to see more information.
                    </Text>
                </View>


                {/* Button Group */}
                <View className="w-full" style={{ gap: 16 }}>

                    <Button
                        onPress={() => navigation.navigate('create-staff')}
                        primary className="px-[18px] py-[12px]">
                        <Image
                            source={PlusIcon}
                        />
                        <Text className="font-sans font-[600] text-white text-[14px] ml-[10px]">
                            Create New Staff
                        </Text>
                    </Button>

                    <Button secondary className="px-[18px] py-[12px]">
                        <Image
                            source={ImportIcon}
                        />
                        <Text className="font-sans font-[600] text-[14px] pl-[6px] items-center leading-[20px]">
                            Import  From CSV File
                        </Text>
                    </Button>
                </View>
            </>
        )
    }

    return (
        <>
            <RightSideBar>
                {content}

                {<DeleteConfirmationModal handleClose={handleModalClose} showModal={isDeleteModalShow} />}
            </RightSideBar>
        </>
    )
}