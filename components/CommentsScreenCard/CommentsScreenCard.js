import { useSelector } from 'react-redux';
import { Image, StyleSheet, Text, View } from 'react-native';

export const CommentsScreenCard = ({ avatar, comment, nickname }) => {
  const username = useSelector(state => state.auth.nickname);
  console.log(nickname);
  console.log(username);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: username === nickname ? 'row-reverse' : 'row',
          marginBottom: 24,
        }}
      >
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View
          style={username === nickname ? styles.userComment : styles.comment}
        >
          <Text style={styles.text}>{comment}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 50,
  },
  comment: {
    marginLeft: 16,
    width: 320,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  userComment: {
    marginRight: 16,
    width: 320,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#212121',
  },
});
