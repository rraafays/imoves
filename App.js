import { StatusBar } from 'expo-status-bar'; // make expo aware of device statusbar
import { StyleSheet, Text, View } from 'react-native'; // stylsheet for theming, text for text, view for displaying things

import firebase from 'firebase/app'; // ability to establish connection to firebase

import credentials from './credentials' // email rraf@tuta.io for credentials file
if (firebase.apps.length == 0) { credentials } // if firebase is not running, run it

export default function App() {
  return (
    <View style={styles.container}>
      <Text>i will become an app called imoves</Text>
      <StatusBar style="auto" />
    </View>
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
