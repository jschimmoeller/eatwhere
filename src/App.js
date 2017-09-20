import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Config from './configs/firebase';
import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp(Config.firebaseConfig);

console.log('fa:', firebaseApp)

class App extends Component {
  render() {
    return (
      <View><Text>Hello World</Text></View>
    );
  }
}

export default App;
