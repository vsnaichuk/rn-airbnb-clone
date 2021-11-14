import React from 'react';
import { FlatList } from 'react-native';
import Room from '../../components/Room/Room';
import rooms from '../../assets/data/rooms';

const RoomsOverview = () => {
  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => <Room room={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RoomsOverview;
