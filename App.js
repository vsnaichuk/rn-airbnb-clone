import React from 'react';
import type { Node } from 'react';
import Home from './src/screens/Home/Home';
import Room from './src/components/Room/Room';
import RoomsOverview from './src/screens/RoomsOverview/RoomsOverview';

const App: () => Node = () => {
  return <RoomsOverview />;
};

export default App;
