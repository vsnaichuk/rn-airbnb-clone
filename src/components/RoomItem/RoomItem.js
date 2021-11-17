import React from 'react';
import { Image } from 'react-native';
import s from './styles';
import { Text, View } from '../Themed';

const RoomItem = ({ room }) => {
  const {
    image,
    type,
    title,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
  } = room;

  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{
          uri: image,
        }}
      />

      <Text style={s.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>

      <Text style={s.description} numberOfLines={2}>
        {type}. {title}
      </Text>

      <Text style={s.prices}>
        <Text style={s.oldPrice}>${oldPrice}</Text>
        <Text style={s.price}>
          {'  $'}
          {newPrice}
        </Text>{' '}
        / night
      </Text>

      <Text style={s.totalPrice}>${totalPrice} total</Text>
    </View>
  );
};

export default RoomItem;
