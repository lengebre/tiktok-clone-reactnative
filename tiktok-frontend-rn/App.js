import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants";
import firebase from "firebase/app";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducers from "./src/redux/reducers"
import AuthScreen from './src/screens/auth';


const store = createStore(rootReducers, applyMiddleware(thunk));

if (firebase.initializeApp.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AuthScreen />
      </View>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
