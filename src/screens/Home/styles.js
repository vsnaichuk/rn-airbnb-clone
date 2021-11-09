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
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
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
    fontWeight: 'bold',
  },
  searchButton: {
    zIndex: 100,
    elevation: Platform.OS === 'android' ? 50 : 0,
    position: 'absolute',
    top: 50,
    height: 60,
    width: Dimensions.get('screen').width - 20,
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
