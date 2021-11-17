import React, { useEffect } from 'react';
import type { Node } from 'react';
import Home from './src/screens/Home/Home';
import RoomItem from './src/components/RoomItem/RoomItem';
import RoomsSearch from './src/screens/RoomsSearch/RoomsSearch';
import LocationsSearch from './src/screens/LocationsSearch/LocationsSearch';
import SplashScreen from 'react-native-splash-screen';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <RoomsSearch />;
};

export default App;
