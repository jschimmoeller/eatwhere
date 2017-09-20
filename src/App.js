import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    console.log('app state: ', this.props.app)
    return (
        <View><Text>Hello World</Text></View>
    );
  }
}

export default connect((state)=>{
  return {
    app: state.app
  }
})(App);
