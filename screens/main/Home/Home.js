import { useState } from 'react';
import { useRoute } from '../../../router';
import { auth } from '../../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export const Home = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, user => setUser(user));

  const routing = useRoute(null);

  return <>{routing}</>;
};
