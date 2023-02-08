import { View, Text, StyleSheet, Image } from 'react-native';

export const CommentsScreen = ({ route }) => {
  const { photo } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  photo: {
    width: '100%',
    height: 240,
  },
});
