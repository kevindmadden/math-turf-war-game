import { Notifications } from 'expo';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'

import { HomeScreen } from '../screens/HomeScreen';
import { CreateGameScreen } from '../screens/CreateGameScreen';
//height: Platform.OS === "ios" ? 64 : (56 + StatusBar.currentHeight),
const RootStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    CreateGame: {
      screen: CreateGameScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      //If there is no header, then the below measurements are the padding needed at the top so that nothing is written over the status bar, note that the heaight may not be needed for ios any longer
      /*headerStyle: {
        height: Platform.OS === "ios" ? 64 : (56 + StatusBar.currentHeight),
        paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
      },*/
    },
    headerMode: Platform.OS === 'ios' ? 'float' : 'float', //or 'screen' for android/ 'float' for ios //'none' for fullscreen
  }
)

const AppContainer = createAppContainer(RootStackNavigator)

export default class RootNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}
