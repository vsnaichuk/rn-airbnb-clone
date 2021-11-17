import React, { useEffect } from 'react';
import type { Node } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import Navigation from './navigation/MainNavigation';

const App: () => Node = () => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
};

export default App;
