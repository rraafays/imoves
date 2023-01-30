import { StatusBar } from 'expo-status-bar'; // make expo aware of device statusbar
import { StyleSheet, Text, View } from 'react-native'; // stylsheet for theming, text for text, view for displaying things

import { Provider } from 'react-redux'; // allows us to select a provider to store states
import { createStore, applyMiddleware } from 'redux'; // allows us to create and use a store
import thunk from 'redux-thunk'; // allows us to use functions that can work with our store
import rootReducer from './src/redux/reducers'

import firebase from 'firebase/app'; // ability to establish connection to firebase
import credentials from './credentials' // email rraf@tuta.io for credentials file
import AuthScreen from './src/screens/auth';

credentials // initialise firebase using credentials

const store = createStore(rootReducer, applyMiddleware(thunk)); // create store so that we can easily pass props

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
