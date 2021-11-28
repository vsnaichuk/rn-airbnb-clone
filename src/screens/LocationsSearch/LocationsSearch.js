import React, { useState } from 'react';
import locations from '../../assets/data/locations';
import s from './styles';
import LocationItem from '../../components/LocationItem/LocationItem';
import { FlatList } from 'react-native';
import { Text, TextInput, View } from '../../components/Themed';

const LocationsSearch = () => {
  const [inputText, setInputText] = useState('');

  return (
    <FlatList
      style={{ margin: 20 }}
      data={locations}
      ListHeaderComponent={
        <TextInput
          style={s.searchBar}
          placeholder="Where are you going?"
          value={inputText}
          onChangeText={setInputText}
        />
      }
      renderItem={({ item }) => <LocationItem location={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default LocationsSearch;
