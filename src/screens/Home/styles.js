import { Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontFamily: 'Raleway-Bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
  },
  searchButton: {
    zIndex: 100,
    elevation: Platform.OS === 'android' ? 50 : 0,
    position: 'absolute',
    top: 50,
    height: 60,
    width: Dimensions.get('screen').width - 20,
    marginLeft: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
  },
});

export default styles;
