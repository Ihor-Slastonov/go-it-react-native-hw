import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultProfileScreen } from '../../nested/DefaultProfileScreen/DefaultProfileScreen';
import { MapScreen } from '../../nested/MapScreen/MapScreen';
import { CommentsScreen } from '../../nested/CommentsScreen/CommentsScreen';

const NestedScreen = createStackNavigator();

export const ProfileScreen = () => {
  return (
    <NestedScreen.Navigator initialRouteName="DefaultProfile">
      <NestedScreen.Screen
        name="DefaultProfile"
        component={DefaultProfileScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="ProfileMap"
        component={MapScreen}
        options={{
          headerTitle: 'Map',
          headerTitleAlign: 'center',
          headerLeftLabelVisible: false,
        }}
      />
      <NestedScreen.Screen
        name="ProfileComments"
        component={CommentsScreen}
        options={{
          headerTitle: 'Comments',
          headerTitleAlign: 'center',
          headerLeftLabelVisible: false,
        }}
      />
    </NestedScreen.Navigator>
  );
};
