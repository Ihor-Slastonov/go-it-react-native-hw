import { useState, useEffect } from 'react';
import { db } from '../../../firebase/config';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { CommentsScreenCard } from '../../../components/CommentsScreenCard/CommentsScreenCard';
import commentDayandTime from '../../../utils/commentDayandTime';
import { AntDesign } from '@expo/vector-icons';

export const CommentsScreen = ({ route }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const { avatar, nickname } = useSelector(state => state.auth);
  const { photo, postId } = route.params;

  useEffect(() => {
    const q = query(
      collection(db, 'posts', postId, 'comments'),
      orderBy('date')
    );
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const comments = [];
      querySnapshot.forEach(doc => {
        comments.push({ ...doc.data(), id: doc.id });
      });
      setAllComments(comments);
    });

    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShown(false);
    });

    return () => {
      unsubscribe();
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleSetComment = text => setComment(text);

  const handleSubmit = async () => {
    if (comment === '') {
      alert('Cannot be empty comment');
      return;
    }
    const fullDate = commentDayandTime();

    await addDoc(collection(db, 'posts', postId, 'comments'), {
      comment,
      avatar,
      nickname,
      date: Date.now().toString(),
      time: fullDate,
    });
    setComment('');
    setIsKeyboardShown(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={{ uri: photo }} style={styles.photo} />

        <SafeAreaView style={{ flex: 1, marginBottom: 20 }}>
          <FlatList
            data={allComments}
            renderItem={({ item }) => (
              <CommentsScreenCard
                avatar={item.avatar}
                comment={item.comment}
                nickname={item.nickname}
                date={item.time}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <View style={isKeyboardShown && styles.inputContainer}>
          <TextInput
            multiline
            value={comment}
            onChangeText={handleSetComment}
            style={{
              ...styles.inputComment,
              height: isKeyboardShown ? 280 : 50,
              borderRadius: isKeyboardShown ? 10 : 100,
            }}
            placeholder="Write comment"
            placeholderTextColor={'#BDBDBD'}
          />
          <TouchableOpacity
            style={{
              ...styles.submit,
              // top: isKeyboardShown ? '' : 8,
              // bottom: isKeyboardShown ? 8 : '',
            }}
            onPress={handleSubmit}
          >
            <AntDesign name="arrowup" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingBottom: 16,
    justifyContent: 'flex-end',
  },
  photo: {
    marginTop: 32,
    marginBottom: 32,
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  inputComment: {
    padding: 16,
    width: '100%',
    heigth: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
  submit: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
  },
  inputContainer: {
    position: 'absolute',
    top: 0,
    left: 16,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    padding: 30,
  },
});
