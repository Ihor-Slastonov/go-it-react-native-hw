import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

export const CommentsScreen = ({ route }) => {
  const { photo } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.photo} />
      <View style={{flex: 1}}></View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputComment}
          placeholder="Write comment"
          placeholderTextColor={'#BDBDBD'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
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
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
});
