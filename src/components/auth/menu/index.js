import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function AuthMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>Sign-in</Text>
      <TouchableOpacity>
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  )
}
