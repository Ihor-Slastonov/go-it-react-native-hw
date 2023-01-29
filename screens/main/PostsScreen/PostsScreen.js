import { View, Text, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 8,
  },
  username: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: '#212121',
  },
  userEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});
