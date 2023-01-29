import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from '../PostsScreen/PostsScreen';
import { CreatePostScreen } from '../CreatePostsScreen/CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
// icons
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#FF6C00',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarItemStyle: { borderRadius: 20, width: 70, height: 40 },
        tabBarStyle: {
          paddingTop: 9,
          justifyContent: 'center',
          paddingLeft: 82,
          paddingRight: 82,
          paddingBottom: 32,
          height: 83
        },
        tabBarIconStyle: { color: "#212121CC" },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <SimpleLineIcons name="grid" size={24} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Create post"
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
