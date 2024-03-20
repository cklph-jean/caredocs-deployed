import { View, Text, Image } from 'react-native'
import Card from "../../components/Card"
import Button from '../../components/Button'
import GalleryIcon from "../../assets/svg/GalleryIcon.svg"
import InputField from '../../components/InputField'
import DropdownSelect from '../../components/DropdownSelect'
import Input from '../../components/Input'
import { facilities } from '../../components/SideBar/FacilityDetails'
import DeleteIcon from "../../assets/svg/DeleteIconRed.svg";
import SaveIcon from "../../assets/svg/SaveIcon.svg"
import { useState } from 'react'
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal'
import { useNavigation } from '@react-navigation/native'


// Todo Move in Separate file
function SectionTitle({ title }) {
    return (
        <>
            <View className="flex flex-row justify-center items-center" style={{ gap: '16px' }}>
                <View className="border-b w-[40%] border-gray-50"></View>
                <Text className="text-center italic text-[#A0A0A0] text-[12px]"> {title} </Text>
                <View className="border-b w-[40%] border-gray-50"></View>
            </View>
        </>
    )
}

// Todo Move in Separate file
function DateInput({ label, placeholderDD, placeholderMM, placeholderYY }) {
    return (
        <View className="" style={{ gap: 4 }}>
            <Text className="text-[14px] text-[#828282]">{label}</Text>
            <View className="grid grid-cols-3" style={{ gap: 8 }}>
                <Input placeholder={placeholderDD} value="" />
                <Input placeholder={placeholderMM} value="" />
                <Input placeholder={placeholderYY} value="" />
            </View>
        </View>
    );
}


export default function ManageStaff({ manage = null }) {

    const navigation = useNavigation();

    const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);

    const handleDeleteStaff = () => {
        handleModalOpen();
    }

    const handleModalClose = () => {
        setIsDeleteModalShow(false);
    }

    const handleModalOpen = () => {
        setIsDeleteModalShow(true);
    }

    const teamList = [
        {
            id: 1,
            label: 'Afternoon Shift',
            value: 'Afternoon Shift'
        }
    ];

    const roleList = [
        {
            id: 1,
            label: 'Staff',
            value: 'Staff'
        }
    ];

    const genderList = [
        {
            id: 1,
            label: "Male",
            value: "Male"
        },
        {
            id: 2,
            label: "Female",
            value: "Female"
        }
    ]

    const cityList = [
        {
            id: 1,
            label: "Olongapo City",
            value: "Olongapo City"
        }
    ]

    const stateList = [
        {
            id: 1,
            label: "Illinois",
            value: "Illinois"
        }
    ]

    facilityOptions = facilities.map((facility, index) => {
        return { id: facility.id, label: facility.name, value: facility.name }
    });

    const handleSelectTeam = (option) => {
        console.log(option);
    }

    return (
        <Card className="bg-white px-[48px] py-[32px] rounded-[12px] custom-shadow-md">
            <View className="flex flex-col justify-end items-end px-[24px] pb-[24px] pt-[16px]">
                <View className="flex flex-row" style={{ gap: 10 }}>
                    <Button
                        secondary
                        className="px-[18px]"
                        onPress={() => navigation.navigate('staff')}
                    >
                        <Text className="font-sans font-[600]">
                            Cancel
                        </Text>
                    </Button>

                    {
                        manage == "edit" && (
                            <>
                                <Button
                                    danger
                                    className="px-[18px]"
                                    onPress={handleDeleteStaff} >
                                    <Image
                                        source={DeleteIcon}
                                        tintColor='white'
                                        className="w-[16px] h-[16px]"
                                    />
                                    <Text className="font-sans font-[600] text-white pl-[6px]">
                                        Delete This Staff
                                    </Text>
                                </Button>
                            </>
                        )
                    }

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

            <View className="py-[12px] px-[24px] flex-row">
                <View className="w-[218px]">
                    <View className="w-[170px] h-[170px] p-[55px] rounded-full bg-purple/20 text-purple">
                        <Image
                            source={GalleryIcon}
                            tintColor="#B693F8"
                            className="w-[60px] h-[60px]"
                        />
                    </View>
                </View>

                <View className="flex-auto" style={{ gap: 32 }}>

                    <SectionTitle title="Basic Information" />

                    <View style={{ gap: 16 }}>
                        <View className="grid grid-cols-4" style={{ gap: 24 }}>
                            <InputField
                                label="First Name"
                                value="Jane"
                            />

                            <InputField
                                label="Middle Name"
                                value="Salvatore"
                            />

                            <InputField
                                label="Last Name"
                                value="Doe"
                            />


                            <InputField
                                label="Nickname"
                                value="Pepper"
                            />
                        </View>

                        <View className="grid grid-cols-3" style={{ gap: 24 }}>
                            <DropdownSelect
                                showLabelOnTop={true}
                                label="Teams"
                                options={teamList}
                                selected={teamList[0]}
                                onSelect={handleSelectTeam}
                            />

                            <DropdownSelect
                                showLabelOnTop={true}
                                label="Role"
                                options={roleList}
                                selected={roleList[0]}
                                onSelect={handleSelectTeam}
                            />

                            <DropdownSelect
                                showLabelOnTop={true}
                                label="Gender"
                                options={genderList}
                                selected={genderList[0]}
                                onSelect={handleSelectTeam}
                            />

                        </View>

                        <View className="grid grid-cols-3" style={{ gap: 24 }}>
                            <InputField
                                label="Place of Birth"
                                value="Chicago, Illinois"
                            />

                            <View className="" style={{ gap: 4 }}>
                                <DateInput
                                    label="Date of Birth"
                                    placeholderDD="DD"
                                    placeholderMM="MM"
                                    placeholderYY="YY"
                                />
                            </View>

                            <InputField
                                label="Age"
                                value="- Input DOB First -"
                                disabled
                            />
                        </View>

                        <View className="grid grid-cols-3" style={{ gap: 24 }}>
                            <InputField
                                label="Email"
                                value="johndoe@gmail.com"
                            />

                            <InputField
                                label="Telephone"
                                value="+10123456789"
                            />

                            <InputField
                                label="Driver's license/ ID"
                                value="0123456789"
                            />
                        </View>

                        {/* Address */}
                        <View>
                            <InputField
                                label="Address"
                                value="12345678 North Narragansett Avenue"
                            />
                        </View>

                        <View className="grid grid-cols-3" style={{ gap: 24 }}>

                            <DropdownSelect
                                showLabelOnTop={true}
                                label="City"
                                options={cityList}
                                selected={cityList[0]}
                                onSelect={handleSelectTeam}
                            />

                            <DropdownSelect
                                showLabelOnTop={true}
                                label="State"
                                options={stateList}
                                selected={stateList[0]}
                                onSelect={handleSelectTeam}
                            />


                            <InputField
                                label="Zip"
                                value="2200"
                            />

                        </View>

                        {/* Address */}

                    </View>

                    <SectionTitle title="Staff Information" />

                    <View style={{ gap: 16 }}>

                        <View>
                            <DropdownSelect
                                showLabelOnTop={true}
                                label="Facility"
                                options={facilityOptions}
                                selected={facilityOptions[0]}
                                onSelect={handleSelectTeam}
                            />
                        </View>

                        <View className="z-[-1]" style={{ gap: 4 }}>
                            <View className="grid grid-cols-3" style={{ gap: 24 }}>
                                <DateInput
                                    label="Hire Date"
                                    placeholderDD="DD"
                                    placeholderMM="MM"
                                    placeholderYY="YY"
                                />
                                <DateInput
                                    label="Date Associated to Facility"
                                    placeholderDD="DD"
                                    placeholderMM="MM"
                                    placeholderYY="YY"
                                />
                                <DateInput
                                    label="Probationary Period End Date"
                                    placeholderDD="DD"
                                    placeholderMM="MM"
                                    placeholderYY="YY"
                                />
                            </View>
                        </View>
                    </View>

                </View>

            </View>

            {isDeleteModalShow && <DeleteConfirmationModal
                handleClose={handleModalClose}
                showModal={isDeleteModalShow}
            />}
        </Card>
    )
}