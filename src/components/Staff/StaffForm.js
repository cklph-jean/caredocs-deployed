import { View, Text, Image } from 'react-native'
import { facilities } from '../SideBar/FacilityDetails';
import DropdownSelect from '../DropdownSelect'
import GalleryIcon from "../../assets/svg/GalleryIcon.svg"
import InputField from '../InputField'
import SectionTitleHorizontal from '../SectionTitleHorizontal'
import DateInput from '../DateInput'

export default function StaffForm({ manage = null }) {

    let staffData = {
        firstName: 'Jane',
        middleName: 'Salvatore',
        lastName: 'Doe',
        nickName: "Pepper",
        team: '',
        role: '',
        gender: '',
        placeOfBirth: 'Chicago, Illinois',
        dateOfBirth: '',
        age: '',
        email: 'johndoe@gmail.com',
        telephone: '+10123456789',
        driversLicenseId: '0123456789',
        address: '12345678 North Narragansett Avenue',
        city: '',
        state: '',
        zip: '2200',
    }

    if (manage == 'create') {
        staffData = {};
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

                <SectionTitleHorizontal title="Basic Information" />

                <View style={{ gap: 16 }}>
                    <View className="grid grid-cols-4" style={{ gap: 24 }}>
                        <InputField
                            label="First Name"
                            value={staffData?.firstName}
                            placeholder="First name"
                        />

                        <InputField
                            label="Middle Name"
                            value={staffData?.middleName}
                            placeholder="Middle name"

                        />

                        <InputField
                            label="Last Name"
                            value={staffData?.lastName}
                            placeholder="Last name"
                        />


                        <InputField
                            label="Nickname"
                            value={staffData?.nickName}
                            placeholder="Nickname"
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
                            value={staffData?.placeOfBirth}
                            placeholder="Place of Birth"
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
                            value={staffData?.email}
                            placeholder="Email"
                        />

                        <InputField
                            label="Telephone"
                            value={staffData?.telephone}
                            placeholder="Telephone"
                        />

                        <InputField
                            label="Driver's license/ ID"
                            value={staffData?.driversLicenseId}
                            placeholder="Driver's license ID"
                        />
                    </View>

                    {/* Address */}
                    <View>
                        <InputField
                            label="Address"
                            value={staffData?.address}
                            placeholder="Address"

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
                            value={staffData?.zip}
                            placeholder="Zip"
                        />

                    </View>

                    {/* Address */}

                </View>

                <SectionTitleHorizontal title="Staff Information" />

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
    )
}