import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications';

import { useEffect } from 'react';
import { useRoute } from '../../../router';
import { useSelector, useDispatch } from 'react-redux';
import { authStateChanged } from '../../../redux/auth/operations';

export const Home = () => {
  const { stateChange } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authStateChanged());
  }, []);
  const routing = useRoute(stateChange);

  return (
    <ToastProvider
      placement="top"
      duration={5000}
      animationType="slide-in"
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
      <NavigationContainer>{routing}</NavigationContainer>
    </ToastProvider>
  );
};
