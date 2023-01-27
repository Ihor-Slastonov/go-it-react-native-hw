import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { RegistrationScreen } from './screens/auth/RegistrationScreen/RegistrationScreen';
import { LoginScreen } from './screens/auth/LoginScreen/LoginScreen';

SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        });
        SplashScreen.hideAsync();
      } catch (error) {
        console.log(error);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
