import { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Button,
  Image,
} from 'react-native';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const CreatePostScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [isPhoto, setIsPhoto] = useState(false);
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePhoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    setPhoto(photo.uri);
    setIsPhoto(true);
  };

  const resetPhotoState = () => {
    setIsPhoto(false);
    setPhoto('');
  };
  
  const onSubmit = () => {
    alert('DUDEEEEE')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 32 }}>
        {isPhoto ? (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{
                width: '100%',
                height: 240,
                backgroundColor: '#F6F6F6',
                borderRadius: 8,
              }}
              source={{ uri: photo }}
            />
            <View
              style={{
                ...styles.icnoBg,
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0.3);',
              }}
            >
              <TouchableOpacity onPress={resetPhotoState}>
                <FontAwesome name="camera" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Camera
            style={styles.camera}
            type={type}
            ref={ref => setCameraRef(ref)}
          >
            <View style={styles.icnoBg}>
              <TouchableOpacity onPress={takePhoto}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
              <TouchableOpacity onPress={toggleCameraType}>
                <MaterialIcons
                  name="flip-camera-android"
                  size={24}
                  color="#BDBDBD"
                />
              </TouchableOpacity>
            </View>
          </Camera>
        )}
        {photo ? (
          <TouchableOpacity>
            <Text style={styles.loadBtnText}>Edit a photo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Text style={styles.loadBtnText}>Load a photo</Text>
          </TouchableOpacity>
        )}
        <View style={{ ...styles.inputContainer, marginBottom: 16 }}>
          <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            style={styles.inputTitle}
            placeholder="Title..."
            placeholderTextColor="#BDBDBD"
          />
        </View>
        <View style={styles.inputContainer}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <TextInput
            value={location}
            onChangeText={text => setLocation(text)}
            style={{ ...styles.inputTitle, marginLeft: 4 }}
            placeholder="Location..."
            placeholderTextColor="#BDBDBD"
          />
        </View>
        <TouchableOpacity
          style={{
            ...styles.submitBtn,
            backgroundColor: photo ? '#FF6C00' : '#F6F6F6',
          }}
          onPress={onSubmit}
        >
          <Text style={{ ...styles.submitTitle, color: photo ? '#FFFFFF' : '#BDBDBD'}}>Post</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  camera: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 8,
  },
  icnoBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  loadBtnText: {
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
    marginBottom: 32,
  },
  inputTitle: {
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  submitBtn: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
  },
  submitTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },
});
