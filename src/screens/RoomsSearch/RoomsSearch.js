import React from 'react';
import { FlatList } from 'react-native';
import RoomItem from '../../components/RoomItem/RoomItem';
import rooms from '../../assets/data/rooms';
import s from './styles';
import { View } from '../../components/Themed';

const RoomsSearch = () => {
  return (
    <View style={s.container}>
      <FlatList
        data={rooms}
        renderItem={({ item }) => <RoomItem room={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RoomsSearch;
