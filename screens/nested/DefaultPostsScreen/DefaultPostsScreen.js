import { useEffect, useState } from 'react';
import { db, app } from '../../../firebase/config';
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';
import { useSelector } from 'react-redux';

import { PostsScreenCard } from '../../../components/PostsScreenCard/PostsScreenCard';

export const DefaultPostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [test, setTest] = useState([]);

  const { nickname, email, avatar } = useSelector(state => state.auth);

  const getPosts = async () => {
    const q = query(collection(db, 'posts'));
    onSnapshot(q, querySnapshot => {
      // setTest([]);
      const allPosts = [];
      querySnapshot.forEach(doc => {
        allPosts.push({ ...doc.data(), id: doc.id });
      });
      setTest(allPosts);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View>
          <Image source={{ uri: avatar }} style={styles.avatar} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{nickname}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={test}
          renderItem={({ item }) => (
            <PostsScreenCard
              photo={item.photo}
              title={item.title}
              location={item.location}
              navigation={navigation}
              coords={item.coords}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
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
    marginBottom: 32,
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
