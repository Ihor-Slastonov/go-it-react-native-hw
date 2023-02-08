import { useState, useEffect } from 'react';

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
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export const CommentsScreen = ({ route }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [comment, setComment] = useState('');

  const { photo, postId } = route.params;
  console.log(postId);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleSetComment = text => setComment(text);
  const handleSubmit = () => {
    setComment('');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.container,
          //   paddingBottom: isKeyboardShown ? 77 : 16,
        }}
      >
        <Image
          source={{ uri: photo }}
          style={{
            ...styles.photo,
            display: isKeyboardShown ? 'none' : 'flex',
          }}
        />
        <View style={{ flex: 1 }}></View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <View style={styles.inputContainer}>
            <TextInput
              value={comment}
              onChangeText={handleSetComment}
              style={styles.inputComment}
              placeholder="Write comment"
              placeholderTextColor={'#BDBDBD'}
            />
            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
              <AntDesign name="arrowup" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  },
  photo: {
    marginTop: 32,
    marginBottom: 32,
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  inputContainer: {},
  inputComment: {
    padding: 16,
    width: '100%',
    height: 50,
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
    top: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
  },
});
