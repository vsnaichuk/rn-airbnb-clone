import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RoomsSearch from '../screens/RoomsSearch/RoomsSearch';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Explore"
        component={ExploreStackNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Saved"
        component={Home} //TODO Implement SavedNavigator
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Airbnb"
        component={Home} //TODO Implement AirbnbNavigator
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Home} //TODO Implement ProfileNavigator
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const ExploreStack = createNativeStackNavigator();
function ExploreStackNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Welcome"
        component={Home}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name="RoomsSearch"
        component={RoomsSearch}
        options={{ title: 'Search your destination' }}
      />
    </ExploreStack.Navigator>
  );
}
