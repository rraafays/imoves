import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Video } from 'expo-av'
import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-paper'
import styles from './styles'

export default function Save_Screen(props) {
  const [description, setDescription] = useState('')
  const NAVIGATION = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View>
        <Video style={styles.video}
          resizeMode='cover'
          shouldPlay={true}
          isLooping={true}
          rate={1}
          isMuted={true}
          source={{ uri: props.route.params.source }}
        />
        <TextInput style={styles.title}
          placeholder='Describe the video'
          multiline={true}
          maxLength={120}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={{ padding: 25 }}
          onPress={() => NAVIGATION.goBack()}
        >
          <MaterialCommunityIcons style={styles.cancel}
            name="cancel"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 25 }}
          onPress={() => NAVIGATION.goBack()}
        >
          <MaterialCommunityIcons style={styles.confirm}
            name="checkbox-marked-circle-outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
