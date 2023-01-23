import { AntDesign } from '@expo/vector-icons';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const imageBg = require('../../assets/images/auth-bg.png');

export const RegistrationScreen = () => {
  const [avatar, setAvatar] = useState(null);
  const [isSecureText, setIsSecureText] = useState(true);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetLogin = text => setLogin(text);
  const handleSetEmail = text => setEmail(text);
  const handleSetPassword = text => setPassword(text);

  const handleSubmit = () => {
    console.log(
      `Avatar: ${avatar}`,
      `Login: ${login}`,
      `Email: ${email}`,
      `Password: ${password}`
    );
    setAvatar(null);
    setLogin('');
    setEmail('');
    setPassword('');
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      console.log(avatar);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBg} style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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

            <Text style={styles.title}>Registration</Text>

            {/* ------------- Блок инпутов и подтверждения -------------- */}
            <View width="100%">
              <TextInput
                value={login}
                onChangeText={handleSetLogin}
                style={{ ...styles.input, marginBottom: 16 }}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
              />
              <TextInput
                value={email}
                onChangeText={handleSetEmail}
                style={{ ...styles.input, marginBottom: 16 }}
                placeholder="E-mail address"
                placeholderTextColor="#BDBDBD"
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  value={password}
                  onChangeText={handleSetPassword}
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={isSecureText}
                />
                <Pressable
                  onPress={() => setIsSecureText(prevState => !prevState)}
                >
                  <Text style={styles.showText}>
                    {isSecureText ? 'Show' : 'Hide'}
                  </Text>
                </Pressable>
              </View>
              <TouchableOpacity
                style={styles.submitBtn}
                activeOpacity={0.9}
                onPress={handleSubmit}
              >
                <Text style={styles.submitBtnText}>Sing up</Text>
              </TouchableOpacity>
            </View>
            {/* --------------------------------------------------------- */}

            <Pressable>
              <Text style={styles.afterSubmitText}>
                Already have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
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
    paddingHorizontal: 16,
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
    fontFamily: 'Roboto-Medium',
    marginTop: 92,
    marginBottom: 32,
    textAlign: 'center',
    color: '#212121',
  },
  input: {
    padding: 16,
    height: 50,
    width: '100%',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
  passwordContainer: {
    flexDirection: 'row',
    marginBottom: 43,
  },
  showText: {
    position: 'absolute',
    right: 16,
    top: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
  submitBtn: {
    marginBottom: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  submitBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
  afterSubmitText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});
