import { NavigationContainer } from '@react-navigation/native';

import { useEffect} from 'react';
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

  return <NavigationContainer>{routing}</NavigationContainer>;
};
