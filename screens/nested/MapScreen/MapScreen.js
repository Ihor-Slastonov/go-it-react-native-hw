import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export const MapScreen = ({ route }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    let location = route.params;
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 46.44697324129863,
          longitude: 30.63472143679174,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      ></MapView>
      <Marker
        coordinate={{
          latitude: 46.44697324129863,
          longitude: 30.63472143679174,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
