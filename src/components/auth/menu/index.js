import React, { useState } from 'react'; // core framework
import { View, Text } from 'react-native'; // view for displaying things text for displaying text
import { TextInput, Button } from 'react-native-paper'; // input field and button components that look nice
import { useWindowDimensions } from 'react-native' // to get the width of the screen
import styles from './styles'; // styles in separate file


export default function AuthMenu({ prompt_password, set_prompt_password }) { // we are passing boolean prompt_password and method set_prompt_password to set it
  const width = useWindowDimensions().width; // get the width of the screen
  const [email, set_email] = useState('')
  const [password, set_password] = useState('')
  return (
    <View style={styles.container} >
      <Text style={styles.header_text}>Welcome</Text>
      <TextInput
        label='Email'
        mode='flat'
        style={{ backgroundColor: 'transparent', width: width * .7 }}
        theme={{ colors: { onSurfaceVariant: '#E0E0E0', onSurface: '#E0E0E0', primary: '#702F8A' } }}
        onChangeText={(text) => set_email(text) & console.log(text)}
      />
      {
        !prompt_password ?
          <Button style={styles.button}
            mode='contained'
            onPress={() => prompt_password ? set_prompt_password(false) & console.log(prompt_password) : set_prompt_password(true) & console.log(prompt_password)}
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
            onChangeText={(text) => set_password(text) & console.log(text)}
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
