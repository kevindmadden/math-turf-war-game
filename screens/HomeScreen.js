import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import * as firebase from 'firebase'

export class HomeScreen extends Component {
  static navigationOptions = {
    title : 'Home Screen!',
    //headerTransparent: true,
  }

  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
        <Button
          color='green'
          title='Create Game'
          accessibilityLabel='Create a game that others can join'
          onPress={()=>this.props.navigation.navigate('CreateGame')}
        />
        <Button
          color='lightblue'
          title='Logout'
          accessibilityLabel='Logout of your Google account and go back to main login screen'
          onPress={()=>this.logoutOfFirebase()}
        />
      </View>
    );
  }

  logoutOfFirebase(){
      firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
      });
  }
}
