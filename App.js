import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Home from './src/screens/Home/Home';

const App: () => Node = () => {
  return <Home />;
};

const styles = StyleSheet.create({});

export default App;
