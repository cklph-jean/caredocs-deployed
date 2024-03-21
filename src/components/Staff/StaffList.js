import { View, Text, Image } from 'react-native'
import Table from '../Table'
import ProfilePic from '../../assets/svg/ProfilePic.svg'
import DefaultProfile from '../../assets/svg/DefaultProfile.svg'
import EllipsesButton from '../../components/EllipsesButton'
import GenderIcon from '../../assets/svg/GenderIcon.svg'
import Button from '../Button'
import { useStaffListStore } from '../../store/apis/caredocs/staff/staffStore'
import { useNavigation } from '@react-navigation/native'
import useDeleteModal from '../../hooks/useDeleteModal'
import DeleteConfirmationModal from '../DeleteConfirmationModal'

export default function StaffList() {

    const navigation = useNavigation();

    const { setActiveRowStaff } = useStaffListStore();

    const handleRowData = (staffData) => {
        setActiveRowStaff(staffData);
    }

    const { isDeleteModalShow, handleModalClose, handleModalOpen } = useDeleteModal();

    const handleDeleteStaff = () => {
        handleModalClose();
    };

    const data = [
        { id: 1, name: "Delisha", team: "Director Board", phone: "+01271234567", gender: "Female", email: "delisha@gmail.com", avatar: ProfilePic },
        { id: 2, name: "Jane Doe", team: "Afternoon Shift", phone: "+01271234567", gender: "Female", email: "jane_doe@gmail.com", avatar: DefaultProfile },
        { id: 4, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female", email: "delisha@gmail.com", avatar: DefaultProfile },
        { id: 5, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female", email: "delisha@gmail.com", avatar: DefaultProfile },
        { id: 6, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female", email: "delisha@gmail.com", avatar: DefaultProfile },
        { id: 7, name: "Jane Doe", team: "Director Board", phone: "+01271234567", gender: "Female", email: "delisha@gmail.com", avatar: DefaultProfile },
    ];

    const config = [
        {
            label: "Name",
            render: (staff) => {
                return (
                    <View className="flex flex-row items-center" style={{ gap: '8px' }}>
                        <Image
                            source={staff.avatar}
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
            render: (staff, activeRow, rowIndex, isRowPressed) => {
                let buttonTextClass, buttonClass, iconColor;
                if (activeRow == rowIndex && isRowPressed) {
                    buttonClass = "bg-primary/10 text-primary border border-primary";
                    buttonTextClass = "text-primary";
                    iconColor = "#26C8B8";
                } else {
                    buttonClass = "bg-[#E7DBFD] text-purple border border-purple"
                    buttonTextClass = "text-purple"
                    iconColor = "#B693F8";
                }

                return (
                    <View className="flex flex-row justify-evenly items-center">
                        <Button className={`${buttonClass} rounded-full px-[16px] py-[8px]`}>
                            <View className="flex flex-row items-center">
                                <Image
                                    source={GenderIcon}
                                    tintColor={iconColor}
                                />
                                <Text className={`${buttonTextClass} font-tt-commons-medium font-bold ml-[10px]`}>
                                    {staff.gender}
                                </Text>
                            </View>
                        </Button>
                    </View>
                )
            },
        },
        {
            label: "",
            render: (staff, activeRow, rowIndex, isRowPressed) => {
                let iconColor;
                if (activeRow == rowIndex && isRowPressed) {
                    iconColor = "#26C8B8";
                } else {
                    iconColor = "#B693F8";
                }
                return (
                    <EllipsesButton
                        color={iconColor}
                        handleEditButton={() => navigation.navigate('edit-staff')}
                        handleDeleteButton={handleModalOpen}
                    />
                )
            }
        }
    ];

    const keyFn = (staff) => {
        return staff.id;
    };

    return (
        <>
            <Table
                data={data}
                config={config}
                keyFn={keyFn}
                handleRowData={handleRowData} />

            {isDeleteModalShow && <DeleteConfirmationModal
                handleClose={handleModalClose}
                handleDelete={handleDeleteStaff}
                showModal={isDeleteModalShow} />}

        </>

    )
}