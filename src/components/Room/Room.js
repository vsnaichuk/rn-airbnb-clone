import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import s from './styles';

const Room = ({ room }) => {
  const {
    image,
    description,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
  } = room;

  return (
    <ScrollView style={s.container}>
      <Image
        style={s.image}
        source={{
          uri: image,
        }}
      />

      <Text style={s.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>

      <Text style={s.description}>
        {description.slice(0, 250).concat('...')}
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
    </ScrollView>
  );
};

export default Room;