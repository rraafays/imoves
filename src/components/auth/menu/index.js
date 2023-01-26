import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useWindowDimensions } from 'react-native'
import styles from './styles';


export default function AuthMenu() {
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
      <TextInput
        label='Password'
        mode='flat'
        style={{ backgroundColor: 'transparent', width: width * .7 }}
        theme={{ colors: { onSurfaceVariant: '#E0E0E0', onSurface: '#E0E0E0', primary: '#702F8A' } }}
      />
      <Button style={styles.button}
        mode='contained'
        onPress={() => console.log('sign them in')}
        theme={{ colors: { outline: '#702F8A', primary: '#702F8A', secondary: '#FFFFFF' } }}
      >
        Continue
      </Button>
    </View>
  )
}
