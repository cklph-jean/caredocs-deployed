import { useState } from "react";
import { Image, Text, View } from "react-native";
import InfoCard from "../../components/InfoCard";
import SignupImage1 from '../../assets/images/signup/SignupImage1.png';
import SignupImage2 from '../../assets/images/signup/SignupImage2.png';
import Frame from '../../assets/svg/signup/Frame.svg'
import BigText from "../../components/BigText";
import LogoImage from '../../assets/svg/Logo.svg';
import Card from "../../components/Card";
import useToggle from "../../hooks/useToggle";
import InputField from "../../components/InputField";
import Link from "../../components/Link";
import Button from "../../components/Button";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { storeData } from "../../utils/asyncStorage";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; // For validation schema
import StatusCard from "../../components/StatusCard";

export default function CreateAccount({ navigation }) {

  const [isPasswordOpen, setIsPasswordOpen] = useToggle(false);
  const [isConfirmPasswordOpen, setIsConfirmPasswordOpen] = useToggle(false);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+63');

  const [isValid, setIsValid] = useState(false);

  const signUpData = {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    phoneNumber,
    countryCode
  }

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleChangeCountryCode = (code) => {
    setCountryCode(code)
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false); // Reset submitting state after submission

    storeData("signUpData", JSON.stringify(values)) // stored on localStorage in the meantime
    // TODO: Keep data secured...

    navigation.navigate('payment-method');
    setIsValid(true);
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
    <View className="items-center py-[20px] lg:px-20 min-h-screen justify-center font-sans">

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
                  alt={'CareDocs Logo'}
                  className="w-[169px] h-[40px]"
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

              <Formik initialValues={signUpData} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <Form>
                    <View style={{ gap: '16px' }}>

                      <InputField
                        label="First name"
                        placeholder="Input your first name here"
                        onChange={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                      />

                      {errors.firstname && touched.firstname && <StatusCard error message={errors.firstname} />}

                      <InputField
                        label="Last name"
                        placeholder="Input your last name here"
                        onChange={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                      />

                      {errors.lastname && touched.lastname && <StatusCard error message={errors.lastname} />}

                      <InputField
                        label="Phone number"
                        placeholder="0"
                        onChange={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        inputType="phone"
                        onChangeCountryCode={handleChangeCountryCode}
                      />

                      {errors.phoneNumber && touched.phoneNumber && <StatusCard error message={errors.phoneNumber} />}

                      <InputField
                        label="Email"
                        placeholder="name@email.com"
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                      />

                      {errors.email && touched.email && <StatusCard error message={errors.email} />}

                      <InputField
                        label="Create a new password"
                        placeholder="Input password here"
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry={!isPasswordOpen ? true : false}
                        icon={<Button className="p-0" onPress={setIsPasswordOpen}>{iconPassword}</Button>}
                      />

                      {errors.password && touched.password && <StatusCard error message={errors.password} />}

                      <InputField
                        label="Confirmation password"
                        placeholder="Input password here"
                        onChange={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        secureTextEntry={!isConfirmPasswordOpen ? true : false}
                        icon={<Button className="p-0" onPress={setIsConfirmPasswordOpen}>{iconConfirmPassword}</Button>}
                      />

                      {errors.confirmPassword && touched.confirmPassword && <StatusCard error message={errors.confirmPassword} />}

                    </View>

                    <View className="flex flex-col items-start mt-[32px]" style={{ gap: '16px' }}>
                      <Button
                        onPress={handleSubmit}
                        disabled={isSubmitting}
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

                  </Form>
                )}
              </Formik>

            </View>


          </View>


        </View>
        {/* Right Area */}

      </View>

    </View>
  )
}
