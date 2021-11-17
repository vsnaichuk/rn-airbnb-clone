import React from 'react';
import {
  ImageBackground,
  Pressable,
  useColorScheme,
} from 'react-native';
import s from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';

const Home = ({ navigation }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={s.container}>
      <Pressable
        style={[
          s.searchButton,
          { backgroundColor: Colors[colorScheme].background },
        ]}
        onPress={() => navigation.navigate('RoomsSearch')}
      >
        <Fontisto name="search" size={25} color="#f15425" />
        <Text style={s.searchText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        style={s.image}
        source={require('../../assets/images/wallpaper.jpg')}
      >
        <Text style={s.title}>
          Go{'\n'}
          Near
        </Text>

        <Pressable
          style={[
            s.button,
            { backgroundColor: Colors[colorScheme].background },
          ]}
          onPress={() => console.warn('explore button clicked!')}
        >
          <Text style={s.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;
