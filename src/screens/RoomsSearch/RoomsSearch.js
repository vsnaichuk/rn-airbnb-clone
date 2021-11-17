import React from 'react';
import { FlatList } from 'react-native';
import RoomItem from '../../components/RoomItem/RoomItem';
import rooms from '../../assets/data/rooms';

const RoomsSearch = () => {
  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => <RoomItem room={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RoomsSearch;
