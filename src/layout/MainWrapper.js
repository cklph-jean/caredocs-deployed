import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Text } from 'react-native';
import bgImage from '../assets/svg/bgImage.png'
import Login from '../screens/login';
import { View } from 'react-native-web';
import ComponentsPage from '../screens/components/';

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
        <ImageBackground source={bgImage} resizeMode="cover" className="flex-1 justify-center w-[100%]">
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
                                </Stack.Group>
                            )
                            : ''
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </ImageBackground>
    )
}
