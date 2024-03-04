import { View, Text } from "react-native";
import Card from "../../components/Card";
import InputField from "../../components/InputField";
import { useState } from "react";
import Button from "../../components/Button";
import Link from "../../components/Link";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <View className="md:flex xl:flex-1 min-h-screen xl:min-h-0 items-center justify-center">
      <View className="w-[356px]">

        <Card className="" style={{ gap: '12px' }}>
          <Text className="font-tt-commons-medium font-bold text-[28px]">
            Forgot Password?
          </Text>

          <Text className="font-normal text-[16px] font-sans lead-[22px]">
            Don’t worry! We will send you a link to reset your password
          </Text>
        </Card>

        <View className="mt-[24px] mb-[32px]">
          <InputField
            label="Email"
            placeholder="name@email.com"
            value={email}
            onChange={handleChangeEmail}
          />
        </View>

        <View className="items-start" style={{gap:'16px'}}>
          <Button primary rounded className="flex-none">
            Submit
          </Button>

          <View className="flex flex-row text-[14px] items-center">
            <Text className="font-sans font-normal">Remember your password? </Text>
            <Link
              className="text-purple"
              navigation={navigation}
              screenName="login"
              text="Back to login page" />
          </View>
        </View>

      </View>

    </View>
  )
}
