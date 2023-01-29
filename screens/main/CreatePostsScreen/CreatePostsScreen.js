import { View, Text, StyleSheet } from 'react-native';

export const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

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
  imageContainer: {
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
  }
});
