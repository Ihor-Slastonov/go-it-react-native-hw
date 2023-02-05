import { store } from './redux/store';
import { ToastProvider } from 'react-native-toast-notifications';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { Home } from './screens/main/Home/Home';

SplashScreen.preventAutoHideAsync();

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
    <Provider store={store}>
      <ToastProvider
        placement="top"
        duration={5000}
        animationType='slide-in'
        animationDuration={500}
        successColor="green"
        dangerColor="red"
        warningColor="orange"
        // icon={<Icon />}
        // successIcon={<SuccessIcon />}
        // dangerIcon={<DangerIcon />}
        // warningIcon={<WarningIcon />}
        textStyle={{ fontSize: 20 }}
        offsetTop={120}
        offsetBottom={40}
        swipeEnabled={true}
      >
        <Home />
        <StatusBar style="auto" />
      </ToastProvider>
    </Provider>
  );
}
