import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
              MovieDetailsScreen: 'movie-details',
            },
          },
          ComingSoon: {
            screens: {
              ComingSoonScreen: 'coming-soon',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'three',
            },
          },
          Downloads: {
            screens: {
              DownloadsScreen: 'four',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
