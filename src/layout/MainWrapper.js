import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { PageTitle } from '../utils/string-utils'

// Singed Out Stacks
import Login from '../screens/login';
import ForgotPassword from '../screens/forgot-password'
import CreateAccount from '../screens/create-account';
import ChooseYourPackage from '../screens/create-account/choose-your-package';
import PaymentMethod from '../screens/create-account/payment-method';
// End of Signed Out Stacks

const SignedInStack = createNativeStackNavigator();
const SignedOutStack = createNativeStackNavigator();

const SignedOutNavigator = () => {
    return <SignedOutStack.Navigator>
        <SignedOutStack.Screen name="create-account" component={CreateAccount} options={{ headerShown: false }} />
        <SignedOutStack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <SignedOutStack.Screen name="forgot-password" component={ForgotPassword} options={{ headerShown: false }} />
        <SignedOutStack.Screen name="choose-your-package" component={ChooseYourPackage} options={{ headerShown: false }} />
        <SignedOutStack.Screen name="payment-method" component={PaymentMethod} options={{ headerShown: false }} />
    </SignedOutStack.Navigator>
}

const SignedInNavigator = () => {
    return <SignedInStack.Navigator></SignedInStack.Navigator>
}


const navigationConfig = {
    prefixes: ['https://caredocs.com', 'caredocs://'],
    config: {
        screens: {
            Home: '',
            Login: 'login',
            ForgotPassword: "forgot-password",
            CreateAccount: "create-account"
        },
    },
};

export default function MainWrapper() {
    const [isAuthenticated, setisAuthenticated] = useState(false);

    return (
        <NavigationContainer
            linking={navigationConfig}
            documentTitle={{
                formatter: (options, route) => `${options?.title ?? PageTitle(route?.name) ?? 'Home'} | CareDocs`,
            }}>
            <View className="flex-1 w-full bg-[url('./src/assets/svg/bgImage.png')] bg-cover lg:px-20 overflow-y-auto">
                <View className="w-full">
                    {
                        !isAuthenticated ? <SignedOutNavigator /> : <SignedInNavigator />
                    }

                </View>
            </View>

        </NavigationContainer>
    )
}
