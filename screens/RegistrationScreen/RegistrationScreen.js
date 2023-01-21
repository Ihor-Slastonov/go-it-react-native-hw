import { AntDesign } from '@expo/vector-icons';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const imageBg = require('../../assets/images/auth-bg.png');

export const RegistrationScreen = () => {
  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      console.log(avatar);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBg} style={styles.image}>
        <View style={styles.form}>
          {/* ---------------------- Блок Аватар ---------------------- */}
          <View style={styles.avatar}>
            <Image source={{ uri: avatar }} style={styles.avatarImg} />
            {avatar ? (
              <Pressable
                onPress={() => {
                  setAvatar(null);
                }}
              >
                <View style={styles.removeAvatarIcon}>
                  <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
                </View>
              </Pressable>
            ) : (
              <Pressable onPress={pickImage}>
                <View style={styles.addAvatarIcon}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </View>
              </Pressable>
            )}
          </View>
          {/* --------------------------------------------------------- */}
          <Text style={styles.title}>Регистрация</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    position: 'relative',
    width: '100%',
    height: 549,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
    flexDirection: 'row',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    alignItems: 'flex-end',
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addAvatarIcon: {
    position: 'absolute',
    right: -13,
    bottom: 14,
  },
  removeAvatarIcon: {
    position: 'absolute',
    right: -13,
    bottom: 14,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    fontFamily:"Roboto-Medium",
    marginTop: 150,
  }
});
