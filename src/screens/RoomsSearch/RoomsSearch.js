import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ActivityIndicator, FlatList } from 'react-native';
import RoomItem from '../../components/RoomItem/RoomItem';
import { useRooms } from '../../store/rooms/useRooms';
import Colors from '../../constants/Colors';
// import s from './styles';

const RoomsSearch = observer(() => {
  const { rooms, fetchRooms, isLoading } = useRooms();

  useEffect(() => {
    fetchRooms();
  }, [rooms]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => <RoomItem room={item} />}
      keyExtractor={(item) => item.id}
    />
  );
});

export default RoomsSearch;
