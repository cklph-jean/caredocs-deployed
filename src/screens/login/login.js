import { useState } from "react";
import { Image, Text, View } from "react-native";

import { Feather } from '@expo/vector-icons';

import WelcomeIcon from "../../assets/svg/Welcome.svg"
import InfoCard from "../../components/InfoCard";
import personImage1 from '../../assets/svg/LoginImage1.png';
import personImage2 from '../../assets/svg/LoginImage2.png';
import LogoImage from '../../assets/svg/Logo.svg';
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import useToggle from "../../hooks/useToggle";
import StatusCard from "../../components/StatusCard";
import Card from "../../components/Card";


export default function Login({ navigation }) {
  const [isPasswordOpen, setIsPasswordOpen] = useToggle(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFailedLogin, setIsFailedLogin] = useState(false);

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleFormSubmit = () => {
    setIsFailedLogin(true);
  }

  const welcomeTitle = <>
    <Text className="text-[32px] font-sans font-normal">
      Welcome, <Text className="font-tt-commons-bold">You</Text>
    </Text>

    <Image
      source={WelcomeIcon}
      className="w-[54px] h-[54px] ml-[20px]"
      alt={'welcom-icon'}
    />
  </>
  const welcomeDescription = `We’re here to support you in delivering the highest quality care to your residents.`;


  const findCareDocsTitle = <>
    <Text className="text-[32px] font-[600] font-tt-commons-medium">
      Find your CareDocs!
    </Text>
  </>
  const findCareDocsDescription = `Every great feature you need for seamless care management is right at your fingertips.`;


  let iconName = "eye-off";
  if (isPasswordOpen) {
    iconName = "eye"
  }

  return (

    <View
      className={`font-sans flex-1 items-center xl:justify-center`}>

      <View className="flex flex-col-reverse xl:flex-row flex-wrap justify-between w-full items-center" style={{ gap: '20px' }}>
        {/* Left Area */}
        <View className="lg:flex" style={{ gap: '7rem' }}>

          <View className="flex flex-col lg:items-end">

            <InfoCard
              className="lg:w-[624px]"
              imagePosition="right"
              imagePath={personImage1}
              title={welcomeTitle}
              description={welcomeDescription}
            />

          </View>


          <View>
            <InfoCard
              className="lg:w-[732px] lg:h-[228px]"
              imagePosition="left"
              imagePath={personImage2}
              title={findCareDocsTitle}
              description={findCareDocsDescription}
            />
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
                  Welcome back!
                </Text>

                <Text className="mt-[12px] text-[16px] font-sans lead-[22px]">
                  Manage your facility administration process more easily with CareDocs.
                </Text>
              </Card>
            </View>


            {/* Login Form */}

            <View className="mt-[24px]" style={{ gap: '32px' }}>
              <View style={{ gap: '16px' }}>

                <InputField
                  label="Email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={handleChange(setEmail)}
                />

                <InputField
                  label="Password"
                  placeholder="Input password here"
                  value={password}
                  onChange={handleChange(setPassword)}
                  secureTextEntry={!isPasswordOpen ? true : false}
                  icon={<Feather name={iconName} size={20} color="#828282" onPress={setIsPasswordOpen} />}
                />

                {

                  isFailedLogin &&

                  <StatusCard
                    error
                    message="Sorry your email or password did not match our records. Please double check and try again." />

                }

                <Link
                  className="text-purple"
                  navigation={navigation}
                  screenName="forgot-password"
                  text="Forgot Password" />


              </View>

              <View className="flex flex-col items-start" style={{ gap: '16px' }}>
                <Button
                  onPress={setIsFailedLogin}
                  primary
                  rounded
                  textColor="text-white"
                  className="flex-none py-[12px] px-[18px]" > Login </Button>


                <View className="flex flex-row text-[14px] items-center">
                  <Text className="font-sans font-normal">Looking to get started? </Text>
                  <Link
                    className="text-purple"
                    navigation={navigation}
                    screenName="create-account"
                    text="Create account" />
                </View>
              </View>
            </View>

            {/* End of Login Form */}
          </View>


        </View>
        {/* End of Right Area */}
      </View>
    </View>
  )
}