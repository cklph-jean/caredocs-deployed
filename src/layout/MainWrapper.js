import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import ForgotPassword from '../screens/forgot-password'

const Stack = createNativeStackNavigator();

const navigationConfig = {
    prefixes: ['https://caredocs.com', 'caredocs://'],
    config: {
        screens: {
            Home: '',
            Login: 'login',
            ComponentsPage: "ComponentsPage"
        },
    },
};

export default function MainWrapper() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        // <ImageBackground source={bgImage} resizeMode="cover" className="flex-1 justify-center w-[100%]">
        <NavigationContainer
            linking={navigationConfig}
            documentTitle={{
                formatter: (options, route) => `${options?.title ?? route?.name ?? 'Home'} | CareDocs`,
            }}>
            <Stack.Navigator>
                {
                    !isLoggedIn ?
                        (
                            <Stack.Group>
                                <Stack.Screen
                                    name='Login'
                                    options={{
                                        headerShown: false,
                                    }}
                                    component={Login}
                                />

                                <Stack.Screen
                                    name="forgot-password"
                                    options={{
                                        headerShown: false,
                                    }}
                                    component={ForgotPassword} />
                            </Stack.Group>
                        )
                        : ''
                }
            </Stack.Navigator>
        </NavigationContainer>
        // </ImageBackground>
    )
}
