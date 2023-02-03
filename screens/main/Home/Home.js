import { NavigationContainer } from '@react-navigation/native';

import { useEffect, useState } from 'react';
import { useRoute } from '../../../router';
import { auth } from '../../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { authStateChanged } from '../../../redux/auth/operations';

export const Home = () => {
  const [user, setUser] = useState(null);
  const state = useSelector(state => state.auth);
  onAuthStateChanged(auth, user => {
    setUser(user);
  });
  const dispatch = useDispatch();
  useEffect(() => {dispatch(authStateChanged())}, []);
  const routing = useRoute(user);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
