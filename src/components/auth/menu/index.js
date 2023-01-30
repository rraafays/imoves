import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useWindowDimensions } from 'react-native'
import styles from './styles';


export default function AuthMenu({ authPage, setAuthPage, promptPassword, setPromptPassword }) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
    <View style={styles.container} >
      <Text style={styles.header_text}>Welcome</Text>
      <TextInput
        label='Email'
        mode='flat'
        style={{ backgroundColor: 'transparent', width: width * .7 }}
        theme={{ colors: { onSurfaceVariant: '#E0E0E0', onSurface: '#E0E0E0', primary: '#702F8A' } }}
      />
      {
        !promptPassword ?
          <Button style={styles.button}
            mode='contained'
            onPress={() => promptPassword ? setPromptPassword(false) & console.log(promptPassword) : setPromptPassword(true) & console.log(promptPassword)}
            theme={{ colors: { outline: '#702F8A', primary: '#702F8A', secondary: '#E0E0E0' } }}
          >
            Continue
          </Button>
          :
          <TextInput
            label='Password'
            mode='flat'
            style={{ backgroundColor: 'transparent', width: width * .7 }}
            theme={{ colors: { onSurfaceVariant: '#E0E0E0', onSurface: '#E0E0E0', primary: '#702F8A' } }}
          />
      }
      <Button style={styles.button}
        mode='outlined'
        onPress={() => console.log('sign them up')}
        theme={{ colors: { outline: '#702F8A', primary: '#E0E0E0', secondary: '#E0E0E0' } }}
      >
        Sign-Up
      </Button>
    </View>
  )
}
