import { useState, useEffect } from 'react';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
//icons
import { Feather } from '@expo/vector-icons';

export const PostsScreenCard = ({
  photo,
  title,
  location,
  navigation,
  coords,
  postId,
}) => {
  const [count, setCount] = useState(null);

  const getCommentsCount = async () => {
    try {
      const coll = collection(db, 'posts', postId, 'comments');
      const snapshot = await getCountFromServer(coll);
      setCount(snapshot.data().count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommentsCount();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.postImage} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.comments}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Comments', { photo, postId })}
          >
            <Feather name="message-circle" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.commentsQuantity}> {count}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.location}
            onPress={() =>
              navigation.navigate('Map', { coords, title, location })
            }
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={styles.locationTitle}>{location}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  postImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#212121',
    marginBottom: 8,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsQuantity: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTitle: {
    marginLeft: 4,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    textDecorationLine: 'underline',
  },
});
