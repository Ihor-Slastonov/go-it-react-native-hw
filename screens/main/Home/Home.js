import { useRoute } from '../../../router';

export const Home = () => {
  const routing = useRoute(false);
  return <>{routing}</>;
};
