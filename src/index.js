import React from 'react';
import App from './App';
import { AppRegistry} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer/index';
// import Config from './configs/firebase';
// import * as firebase from 'firebase';
//
// const firebaseApp = firebase.initializeApp(Config.firebaseConfig);
//
// console.log('fa:', firebaseApp)

// ******************************
// ****      THE STORE       ****
// ******************************
const store = createStore(reducer, applyMiddleware(thunk)); //TODO const store = createStore(reducer, applyMiddleware(analytics, thunk));

console.log('store is:', store.getState())

const MyApp = () =>{
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
AppRegistry.registerComponent('App', ()=>MyApp );

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
});
