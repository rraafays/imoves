import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'
import styles from './styles'

export default function Save_Screen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View>
        <TextInput style={styles.title}
          placeholder='Describe the video'
          multiline={true}
          maxLength={120}
        />
      </View>
    </View>
  )
}
