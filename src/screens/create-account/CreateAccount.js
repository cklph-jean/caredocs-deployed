import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import InfoCard from "../../components/InfoCard";
import SignupImage1 from '../../assets/svg/signup/SignupImage1.png';
import SignupImage2 from '../../assets/svg/signup/SignupImage2.png';
import Frame from '../../assets/svg/signup/Frame.svg'
import BigText from "../../components/BigText";
import LogoImage from '../../assets/svg/Logo.svg';
import Card from "../../components/Card";
import useToggle from "../../hooks/useToggle";
import InputField from "../../components/InputField";
import StatusCard from "../../components/StatusCard";
import Link from "../../components/Link";
import Button from "../../components/Button";
import { FiEyeOff, FiEye } from "react-icons/fi";


export default function CreateAccount({ navigation }) {

  const [isPasswordOpen, setIsPasswordOpen] = useToggle(false);
  const [isConfirmPasswordOpen, setIsConfirmPasswordOpen] = useToggle(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFailedLogin, setIsFailedLogin] = useState(false);

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleChangeCountryCode = (code) => {
    console.log(code);
  }

  const handleFormSubmit = () => {
    setIsFailedLogin(true);
  }

  let iconPassword = <FiEyeOff className="text-[#828282] w-[20px] h-[20px] p-0" />
  let iconConfirmPassword = <FiEyeOff className="text-[#828282] w-[20px] h-[20px] p-0" />

  if (isPasswordOpen) {
    iconPassword = <FiEye className="text-[#828282] w-[20px] h-[20px] p-0" />
  }

  if (isConfirmPasswordOpen) {
    iconConfirmPassword = <FiEye className="text-[#828282] w-[20px] h-[20px] p-0" />
  }

  return (
    <View className="items-center lg:px-5 py-[20px] min-h-screen justify-center font-sans">

      <View className="flex flex-col-reverse xl:flex-row flex-wrap justify-between w-full items-center" style={{ gap: '20px' }}>

        {/* Left Area */}
        <View className="lg:flex max-w-3xl w-full" style={{ gap: '7rem' }}>

          <View className="">

            <InfoCard
              className="lg:w-[732.593px]"
              imageClass="lg:bottom-[-102px] lg:right-[20px]"
              imagePosition="left"
              imagePath={SignupImage1}
              title={<BigText>Unlock Your Care Facility</BigText>}
              description={`In our commitment to excellence, we stand by you, ready to assist in every way possible to ensure top-tier care to your residents.`}
            />

          </View>


          <View className="flex flex-col lg:items-end">
            <InfoCard
              className="lg:w-[651.804px] lg:h-[300px]"
              imagePosition="right"
              imageClass="shrink-0 lg:top-[-195px]"
              imagePath={SignupImage2}>

              <View className="flex flex-col h-full justify-between w-[300px]" style={{ gap: '24px' }}>
                <Text className="text-[22px] italic font-[600] leading-[28px]">
                  This app is to become stress-reliever and help them manage the facility more effectively, so I can have a more balanced life.
                </Text>

                <View className="flex flex-row" style={{ gap: '8px' }}>
                  <View>
                    <Image
                      source={Frame}
                      alt="Frame Quote"
                    />
                  </View>

                  <View className="justify-center">
                    <Text className="font-[400] text-[16px]">Shaina</Text>
                    <Text className="font-sans">General Practicioner</Text>
                  </View>
                </View>
              </View>
            </InfoCard>
          </View>

        </View>
        {/* End of Left Area */}


        {/* Right Area */}
        <View className="flex-1 flex-col items-center self-stretch">

          <View className="lg:w-[356px]">

            <View className="">
              {/* Logo */}
              <View className="flex flex-row mt-[32px] mb-[16px] justify-center">
                <Image
                  source={LogoImage}
                  width={'169px'}
                  height={'40px'}
                  alt={'CareDocs Logo'}
                  className="w-[100px] h-[100px]"
                />
              </View>
              {/* End of Logo */}

              <Card className="mt-[32px]">
                <Text className="font-tt-commons-medium font-bold text-[28px]">
                  Set your login credential
                </Text>

                <Text className="mt-[12px] text-[16px] font-sans lead-[22px]">
                  Let’s make your administration process more easily with CareDocs.
                </Text>
              </Card>
            </View>

            <View className="mt-[24px]" style={{ gap: '32px' }}>
              <View style={{ gap: '16px' }}>

                <InputField
                  label="First name"
                  placeholder="Input your first name here"
                  value={firstName}
                  onChange={handleChange(setFirstName)}
                />

                <InputField
                  label="Last name"
                  placeholder="Input your last name here"
                  value={lastName}
                  onChange={handleChange(setLastName)}
                />

                <InputField
                  label="Phone number"
                  placeholder="0"
                  value={phoneNumber}
                  onChange={handleChange(setPhoneNumber)}
                  inputType="phone"
                  onChangeCountryCode={handleChangeCountryCode}
                />

                <InputField
                  label="Email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={handleChange(setEmail)}
                />

                <InputField
                  label="Create a new password"
                  placeholder="Input password here"
                  value={password}
                  onChange={handleChange(setPassword)}
                  secureTextEntry={!isPasswordOpen ? true : false}
                  icon={<Button className="p-0" onPress={setIsPasswordOpen}>{iconPassword}</Button>}
                />

                <InputField
                  label="Confirmation password"
                  placeholder="Input password here"
                  value={confirmPassword}
                  onChange={handleChange(setConfirmPassword)}
                  secureTextEntry={!isConfirmPasswordOpen ? true : false}
                  icon={<Button className="p-0" onPress={setIsConfirmPasswordOpen}>{iconConfirmPassword}</Button>}
                />

              </View>

              <View className="flex flex-col items-start" style={{ gap: '16px' }}>
                <Button
                  onPress={() => navigation.navigate('payment-method')}
                  primary
                  rounded
                  textClass="text-white"
                  className="flex-none py-[12px] px-[18px]" > Sign up </Button>


                <View className="flex flex-row text-[14px] items-center">
                  <Text className="font-sans font-normal">Already have an account? </Text>
                  <Link
                    className="text-purple"
                    navigation={navigation}
                    screenName="login"
                    text="Go to login page" />
                </View>
              </View>
            </View>


          </View>


        </View>
        {/* Right Area */}

      </View>

    </View>
  )
}
