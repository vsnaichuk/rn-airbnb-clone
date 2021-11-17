import React from 'react';
import { Text, View } from '../Themed';
import s from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const LocationItem = ({ location }) => {
  return (
    <View style={s.row}>
      <View style={s.iconBox}>
        <Entypo name="location-pin" size={26} />
      </View>

      <Text style={s.description}>{location.description}</Text>
    </View>
  );
};

export default LocationItem;
