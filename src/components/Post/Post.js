import React from 'react';
import { Image, Text, View } from 'react-native';
import s from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      <Text style={s.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={s.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        blanditiis, cumque ducimus incidunt maxime modi molestias
        natus nihil nobis officia omnis porro, praesentium provident
        quaerat, quam quas rem sit voluptatem.
      </Text>

      <Text style={s.prices}>
        <Text style={s.oldPrice}>$36</Text>
        <Text style={s.price}>{'  '}$36</Text> / night
      </Text>

      <Text style={s.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
