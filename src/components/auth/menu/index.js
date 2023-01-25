import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';

export default function AuthMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>Welcome</Text>
      <TextInput
        label='Email'
        mode='flat'
        textColor='#FFFFFF'
        style={{ backgroundColor: 'transparent' }}
      />
      <TextInput
        label='Password'
        mode='flat'
        textColor='#FFFFFF'
        style={{ backgroundColor: 'transparent' }}
      />
    </View>
  )
}
