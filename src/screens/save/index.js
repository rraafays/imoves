import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-paper'
import styles from './styles'

export default function Save_Screen(props) {
  const NAVIGATION = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View>
        <Image style={styles.thumbnail}
          source={{ uri: props.route.params.source }}
        />
        <TextInput style={styles.title}
          placeholder='Describe the video'
          multiline={true}
          maxLength={120}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancel}
          onPress={() => NAVIGATION.goBack()}
        >
          <MaterialCommunityIcons style={styles.cancel}
            name='cancel'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
