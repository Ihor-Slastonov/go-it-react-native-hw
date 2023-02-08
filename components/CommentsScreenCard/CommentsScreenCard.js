import { Image, StyleSheet, Text, View } from 'react-native';

export const CommentsScreenCard = ({ avatar }) => {
  console.log(avatar);
  return (
    <View>
      <View>
        <Image source={{ uri: avatar }} style={StyleSheet.avatar} />
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container
})