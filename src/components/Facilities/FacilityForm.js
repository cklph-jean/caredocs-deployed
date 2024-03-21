import { View, Text } from 'react-native'
import SectionTitleHorizontal from '../SectionTitleHorizontal'
import InputField from '../InputField';
import DropdownSelect from '../DropdownSelect';

function AddressForm({ handleAddressData }) {

    const handleSelectCity = (option) => {
        console.log(option);
    }

    const handleSelectState = (option) => {
        console.log(option);
    }

    const cityList = [
        {
            id: 1,
            label: "Olongapo City",
            value: "Olongapo City"
        },
        {
            id: 2,
            label: "Cebu City",
            value: "Cebu City"
        },
        {
            id: 3,
            label: "Davao City",
            value: "Davao City"
        },
    ]

    const stateList = [
        {
            id: 1,
            label: "Illinois",
            value: "Illinois"
        }
    ]

    return (
        <>
            <DropdownSelect
                showLabelOnTop={true}
                label="City"
                options={cityList}
                selected={cityList[0]}
                onSelect={handleSelectCity}
            />

            <DropdownSelect
                showLabelOnTop={true}
                label="State"
                options={stateList}
                selected={stateList[0]}
                onSelect={handleSelectState}
            />


            <InputField
                label="Zip"
                value=""
                placeholder="Zip"
            />
        </>
    )
}

export default function FacilityForm({ manage = null }) {

    let facilityData = {
        id: 1,
        pointOfContact: {
            firstName: '',
            middleName: '',
            lastName: '',
        }
    };

    if (manage == 'create') {
        facilityData = {};
    }

    return (
        <View className="py-[32px]" style={{ gap: 32 }}>

            <SectionTitleHorizontal title="Company Profile" />

            <View style={{ gap: 16 }}>
                <View className="grid grid-cols-3" style={{ gap: 24 }}>
                    <InputField
                        label="(Point of Contact) First Name"
                        value={facilityData?.pointOfContact?.firstName}
                        placeholder="First name"
                    />


                    <InputField
                        label="(Point of Contact) Middle Name"
                        value={facilityData?.pointOfContact?.middleName}
                        placeholder="Middle name"
                    />

                    <InputField
                        label="(Point of Contact) Last Name"
                        value={facilityData?.pointOfContact?.lastName}
                        placeholder="Last name"
                    />
                </View>

                <View className="grid grid-cols-3" style={{ gap: 24 }}>
                    <InputField
                        label="Business Name"
                        value={facilityData?.businessName}
                        placeholder="Business Name"
                    />


                    <InputField
                        label="Company Email Address"
                        value={facilityData?.companyEmailAddress}
                        placeholder="Email Address"
                    />

                    <InputField
                        label="Company Telephone Number"
                        value={facilityData?.companyTelephone}
                        placeholder="Company Telephone Number"
                    />
                </View>

                <View>
                    <InputField
                        label="Company Address"
                        placeholder="Company Address"
                    />
                </View>

                <View className="grid grid-cols-3" style={{ gap: 24 }}>
                    <AddressForm />
                </View>
            </View>

            <SectionTitleHorizontal title="Facility Information" />


            <View style={{ gap: 16 }}>
                <View className="grid grid-cols-3" style={{ gap: 24 }}>
                    <InputField
                        label="Licensee Name"
                        value=""
                        placeholder="Licensee name"
                    />


                    <InputField
                        label="Licensee Number"
                        value=""
                        placeholder="Licensee number"
                    />

                    <InputField
                        label="Vendor Number"
                        value=""
                        placeholder="Vendor number"
                    />
                </View>

                <View className="grid grid-cols-3" style={{ gap: 24 }}>
                    <InputField
                        label="Administrator Name"
                        value=""
                        placeholder="Administrator Name"
                    />


                    <InputField
                        label="Administrator Phone Number"
                        value=""
                        placeholder="Administrator Phone Number"
                    />

                    <InputField
                        label="Administrator Email Address"
                        value=""
                        placeholder="Administrator Email Address"
                    />
                </View>

                <View className="grid grid-cols-2" style={{ gap: 32 }}>

                    <InputField
                        label="Facility Name"
                        value=""
                        placeholder="Input facility name here"
                    />

                    <InputField
                        label="Address"
                        value=""
                        placeholder="Input facility address here"
                    />
                </View>

                <View className="grid grid-cols-2" style={{ gap: 32 }}>

                    <InputField
                        label="ARF Level"
                        value=""
                        placeholder="Input facility address here"
                    />

                    <InputField
                        label="Facility Phone Number"
                        value=""
                        placeholder="Input facility’s phone number"
                    />

                </View>

                <View className="grid grid-cols-2" style={{ gap: 32 }}>
                    <InputField
                        label="Facility Type"
                        value=""
                        placeholder=""
                    />

                    <InputField
                        label="Facility Max Capacity"
                        value=""
                        placeholder=""
                    />
                </View>
            </View>

        </View>
    )
}