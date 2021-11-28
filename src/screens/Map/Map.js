import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import s from './styles';
import { Platform } from 'react-native';
import {
  check,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const Map = () => {
  const [location, setLocation] = useState(null);

  const verifyPermission = async (permission) => {
    const status = await check(permission);

    if (status === RESULTS.BLOCKED || status === RESULTS.DENIED) {
      const res = await request(permission);

      res === RESULTS.GRANTED
        ? console.warn('Location permission granted.')
        : console.warn('location permission denied.');
    }
  };

  const handleLocationPermission = async () => {
    const iosPerm = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    const androidPerm = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    if (Platform.OS === 'ios') {
      await verifyPermission(iosPerm);
    }
    if (Platform.OS === 'android') {
      await verifyPermission(androidPerm);
    }
  };

  useEffect(() => {
    handleLocationPermission();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={s.map}
      region={{
        latitude: location?.latitude ?? 57.709127,
        longitude: location?.longitude ?? 11.934746,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    />
  );
};

export default Map;
