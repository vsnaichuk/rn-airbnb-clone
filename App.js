import React from 'react';
import type { Node } from 'react';
import Home from './src/screens/Home/Home';
import RoomItem from './src/components/RoomItem/RoomItem';
import RoomsSearch from './src/screens/RoomsSearch/RoomsSearch';
import LocationsSearch from './src/screens/LocationsSearch/LocationsSearch';

const App: () => Node = () => {
  return <RoomsSearch />;
};

export default App;
