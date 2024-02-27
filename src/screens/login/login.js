import { Image, Text, View } from "react-native";
import WelcomeIcon from "../../assets/svg/Welcome.svg"
import InfoCard from "../../components/InfoCard";
import personImage1 from '../../assets/svg/LoginImage1.png';
import personImage2 from '../../assets/svg/LoginImage2.png';
import LogoImage from '../../assets/svg/Logo.svg';
import InputField from "../../components/InputField";
import { useState } from "react";
import Button from "../../components/Button";


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

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

  return (

    <View
      className={`font-sans bg-[url('./src/assets/svg/bgImage.png')] bg-cover flex-1 items-center w-full justify-center`}>
      <View className="flex flex-row flex-wrap justify-between w-full items-center px-20">

        {/* Left Area */}
        <View className="" style={{ gap: '7rem' }}>

          <View className="flex flex-col items-end">

            <InfoCard
              className="w-[624px]"
              imagePosition="right"
              imagePath={personImage1}
              title={welcomeTitle}
              description={welcomeDescription}
            />
            
          </View>


          <View>
            <InfoCard
              className="w-[732px] h-[228px]"
              imagePosition="left"
              imagePath={personImage2}
              title={findCareDocsTitle}
              description={findCareDocsDescription}
            />
          </View>

        </View>

        {/* Right Area */}
        <View className="flex-1 flex-col items-center self-stretch">

          <View className="w-[356px]">
            {/* Logo */}
            <View className="">
              <View className="flex flex-row mt-[32px] mb-[16px] justify-center">
                <Image
                  source={LogoImage}
                  width={'169px'}
                  height={'40px'}
                  alt={'CareDocs Logo'}
                  className="w-[100px] h-[100px]"
                />
              </View>

              <View className="mt-[32px]">
                <Text className="font-tt-commons-medium font-bold text-[28px]">
                  Welcome back!
                </Text>

                <Text className="mt-[12px] text-[16px] font-sans lead-[22px]">
                  Manage your facility administration process more easily with CareDocs.
                </Text>
              </View>
            </View>


            {/* Login Form */}
            <View className="mt-[24px]" style={{ gap: '16px' }}>
              
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
                secureTextEntry={true}
              />


              <View className="flex flex-row mt-[32px]">

                <Button 
                  primary 
                  rounded 
                  textColor="text-white" 
                  className="py-[12px] px-[18px]" > Login </Button>

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