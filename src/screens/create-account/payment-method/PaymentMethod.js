import { useState } from "react";
import { Image, Text, View } from "react-native";
import CardDetailsInput from "../../../components/CardDetailsInput";
import LogoImage from '../../../assets/svg/Logo.svg';
import Card from "../../../components/Card";
import InputField from "../../../components/InputField";
import DropdownSelect from "../../../components/DropdownSelect";
import Link from "../../../components/Link";
import Button from "../../../components/Button";
import Lock from "../../../assets/svg/Lock.svg"



export default function PaymentMethod() {
    const [nameOnCard, setNameOnCard] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    const handlePaymentMethodFormSubmit = () => {
        console.log('Submitted');
    }

    const handleCardDetailsValue = (cardDetails) => {
        console.log(cardDetails);
    }

    // TODO use third party api for list of countries with list of cities.
    const countries = [
        { label: 'Philippines', value: 'PH' },
        { label: 'United State of America', value: 'USA' },
        { label: 'Japan', value: 'JPY' },
    ];

    const cities = [
        { label: 'Manila', value: 'MNL' },
        { label: 'Cebu', value: 'CEB' },
        { label: 'Davao', value: 'DAV' },
    ]

    const handleSelectCountry = (option) => {
        setCountry(option);
    };

    const handleSelectCity = (option) => {
        setCity(option);
    };

    return (
        <View className="items-center min-h-screen justify-center font-sans">
            <View className="flex flex-col py-10 lg:py-0 xl:flex-row lg:flex-wrap w-full items-center" style={{gap:'32px'}}>
                {/* Left Area */}
                <View className="lg:flex items-center lg:w-1/2" style={{ gap: '32px' }}>
                    <View className="w-[356px]" style={{ gap: '24px' }}>
                        <View style={{ gap: '32px' }}>
                            {/* Logo */}
                            <View className="flex flex-row justify-start">
                                <Image
                                    source={LogoImage}
                                    width={'169px'}
                                    height={'40px'}
                                    alt={'CareDocs Logo'}
                                    className="w-[100px] h-[100px]"
                                />
                            </View>
                            {/* End of Logo */}

                            <Card className="" style={{ gap: '12px' }}>
                                <Text className="font-[500] text-[28px] leading-[34px]">
                                    Payment method
                                </Text>

                                <Text className="text-[16px] font-sans lead-[22px]">
                                    Let’s make your administration process more easily with CareDocs.
                                </Text>
                            </Card>
                        </View>

                        <View className="shadow-sm" style={{ gap: '16px' }}>
                            <View>
                                <InputField
                                    label="Name on card"
                                    placeholder="Input your name on card"
                                    value={nameOnCard}
                                />
                            </View>

                            <CardDetailsInput handleCardDetailsValue={handleCardDetailsValue} />

                            <View className="relative z-[2]" style={{ gap: '4px' }}>
                                <Text className="font-sans text-[14px] text-secondary">
                                    Country
                                </Text>

                                <DropdownSelect
                                    label="Select Country"
                                    options={countries}
                                    onSelect={handleSelectCountry} />
                            </View>


                            <View className="z-[1]" style={{ gap: '4px' }}>
                                {/* TODO MAKE COMPONENT FOR BILLING ADDRESS */}
                                <Text className="font-sans text-[14px] text-secondary">
                                    Billing address
                                </Text>

                                <View>
                                    <DropdownSelect
                                        label="Select city"
                                        options={cities}
                                        onSelect={handleSelectCity} />

                                    <InputField
                                        className="rounded-b-[5px]"
                                        placeholder="Enter your zip code"
                                        value={zipCode}
                                        onChange={handleChange(setZipCode)}
                                        customRadius={true}
                                    />
                                </View>
                            </View>
                        </View>

                        <View>
                            <Text className="font-sans">
                                By click payment, you agree to CareDocs <Link className="text-purple" text="Terms of Use" /> and <Link className="text-purple" text="Privacy policy" />. This subscription automatically renews monthly, and you’ll be notified if the above amount increases.
                            </Text>
                        </View>

                        <Button textClass="font-[600] text-[14px] leading-[20px] text-white flex" primary rounded className="px-[18px] py-[12px] w-full">
                            <Image source={Lock} width={20} height={20} tintColor="white" className="mr-[6px]" />
                            Pay Now
                        </Button>
                    </View>
                </View>
                {/* End of Left Area */}

                {/* Right Area */}

                <View className="relative lg:flex-1 bg-center bg-cover w-full lg:w-1/2 min-h-screen h-full" style={{ gap: '7rem' }}>
                    {/* Background Image */}
                    <View className="absolute inset-0 h-full bg-cover bg-center bg-[url('./src/assets/images/payment-method/payment-source.jpeg')] bg-opacity-50"></View>

                    {/* Overlay */}
                    <View className="absolute inset-0 bg-black/50 bg-opacity-50"></View>

                    {/* Content */}
                    <View className="relative z-10 items-center pt-[182px]">
                        <View className="w-[356px] font-sans">

                            <View className="pb-[24px]" style={{ gap: '24px' }}>
                                <Text className="text-white text-[22px]">Order Summary</Text>
                                <View className="border-white border-b-[2px]"></View>
                            </View>

                            {/* Item */}
                            <View className="pb-[24px]" style={{ gap: '24px' }}>
                                <View className="flex flex-row justify-between">
                                    <Text className="text-white text-[18px]">Beginner package</Text>
                                    <Text className="text-white text-[18px]">$79 /month</Text>
                                </View>
                                <View className="border-white border-b-[2px]"></View>
                            </View>

                            {/* Total Payment Due */}
                            <View className="pb-[24px]" style={{ gap: '24px' }}>
                                <View className="flex flex-row justify-between">
                                    <View style={{gap:'4px'}}>
                                        <Text className="text-white text-[22px]">Total due today</Text>
                                        <Text className="text-white text-[14px]">*T&C apply</Text>
                                    </View>
                                    <Text className="text-white text-[22px]">$79</Text>
                                </View>
                                <View className="border-white border-b-[2px]"></View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* End of Right Area */}

            </View>
        </View>
    )
}
