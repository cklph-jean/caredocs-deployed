import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import CardDetailsInput from "../../../components/CardDetailsInput";
import LogoImage from '../../../assets/svg/Logo.svg';
import Card from "../../../components/Card";
import InputField from "../../../components/InputField";
import DropdownSelect from "../../../components/DropdownSelect";
import Link from "../../../components/Link";
import Button from "../../../components/Button";
import Lock from "../../../assets/svg/Lock.svg"
import BillingAddress from "../../../components/BillingAddress";
import CountriesDropdownSelect from "../../../components/CountriesDropdownSelect";
import { retrieveData } from "../../../utils/asyncStorage";
import useAuthStore from "../../../store/apis/caredocs/auth";
import PopupModal from "../../../components/PopUpModal";
import ResendEmailCountdown from "../../../components/ResendEmailCountdown";
import useCountdownStore from "../../../store/apis/caredocs/countDownStore";

export default function PaymentMethod() {
    const [nameOnCard, setNameOnCard] = useState('');
    const [country, setCountry] = useState('');
    const [cities, setCities] = useState('');
    const [signUpError, setSignUpError] = useState(null);
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isResent, setIsResent] = useState(false);

    const { user, error, register } = useAuthStore();
    const { isResendEnabled, resetCountdown } = useCountdownStore();

    useEffect(() => {

        if (error) {
            setSignUpError(error)
        }

        if (user && !signUpError) {
            // navigation.navigate('payment-method')
        }

    }, [user, error, signUpError])

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    const handlePaymentMethodFormSubmit = async () => {
        const result = await retrieveData('signUpData');
        const signUpData = JSON.parse(result);

        await register(signUpData);

        setEmail(signUpData.email);
        handleShow(); // show modal

        // removeData('signUpData');
        // navigation.navigate('login');
    }

    const handleCardDetailsValue = (cardDetails) => {
        console.log(cardDetails);
    }

    const handleBillingAddressValues = (billingAddressDetails) => {
        console.log(billingAddressDetails)
    }

    const handleSelectCountry = (option) => {
        setCountry(option.value);


        const optionCities = option.cities.map((city) => {
            return { label: city, value: city };
        });

        setCities(optionCities)
    };

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleResendEmail = () => {
        setIsResent(true)
        resetCountdown();
    }

    const handleBackToLogin = () => {
        navigation.navigate('login');
    }

    const actionBar = (
        <View className="flex" style={{ gap: '11px' }}>

            {!isResendEnabled && <ResendEmailCountdown reSent={isResent} />}

            {
                !isResent &&
                (
                    <Button
                        primary
                        disabled={!isResendEnabled}
                        onPress={handleResendEmail} >
                        Resend email
                    </Button>
                )
            }

            <Button onPress={handleBackToLogin} secondary rounded>
                Back to Login
            </Button>
        </View>
    );

    const modal = (
        <PopupModal onClose={handleClose} actionBar={actionBar} className="w-[344px] px-[16px] pb-[16px]">
            <View className="py-[48px]" style={{ gap: "8px" }}>
                <Text className="font-tt-commons-medium font-[600] text-[18px] text-black">
                    Check your email inbox
                </Text>

                <Text className="font-sans text-[14px]">
                    We sent a link to <Text className="font-[800]">{email}</Text>. If you don’t see it, check your spam folder. After confirming your email, you can explore the platform.
                </Text>
            </View>

        </PopupModal>
    );

    return (
        <View className="items-center min-h-screen justify-center font-sans">
            <View className="flex flex-col py-10 lg:py-0 lg:flex-row lg:flex-wrap w-full items-center">
                {/* Left Area */}
                <View className="lg:flex items-center lg:w-1/2 pb-[32px]" style={{ gap: '32px' }}>
                    <View className="w-[356px]" style={{ gap: '24px' }}>

                        <View style={{ gap: '32px' }}>
                            {/* Logo */}
                            <View className="flex flex-row justify-start">
                                <Image
                                    source={LogoImage}
                                    alt={'CareDocs Logo'}
                                    className="w-[169px] h-[40px]"
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
                                    onChange={handleChange(setNameOnCard)}
                                />
                            </View>

                            <CardDetailsInput handleCardDetailsValue={handleCardDetailsValue} />

                            <CountriesDropdownSelect handleSelectCountry={handleSelectCountry} />

                            <BillingAddress
                                cities={cities}
                                handleBillingAddressValues={handleBillingAddressValues}
                            />
                        </View>

                        <Text className="font-sans -z-10">
                            By click payment, you agree to CareDocs <Link className="text-purple" text="Terms of Use" /> and <Link className="text-purple" text="Privacy policy" />. This subscription automatically renews monthly, and you’ll be notified if the above amount increases.
                        </Text>

                        <Button
                            textClass="-z-10 font-[600] text-[14px] leading-[20px] text-white flex"
                            className="px-[18px] py-[12px] w-full"
                            primary
                            rounded
                            onPress={handlePaymentMethodFormSubmit}
                        >
                            <Image source={Lock} width={20} height={20} tintColor="white" className="mr-[6px]" />
                            Pay Now
                        </Button>

                        <View>
                            {showModal && modal}
                        </View>
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
                                    <View style={{ gap: '4px' }}>
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
