import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from '../PostsScreen/PostsScreen';
import { CreatePostScreen } from '../CreatePostsScreen/CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator initialRouteName="Posts">
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
      <MainTab.Screen name="Create post" component={CreatePostScreen} />
    </MainTab.Navigator>
  );
};
