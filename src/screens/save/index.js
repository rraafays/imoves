import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StackActions, useNavigation } from '@react-navigation/native'
import { Video } from 'expo-av'
import React, { useState } from 'react'
import { View, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { post } from '../../redux/actions'
import styles from './styles'

export default function Save_Screen(props) {
  const [description, set_description] = useState('')
  const [request_running, set_request_running] = useState(false)
  const NAVIGATION = useNavigation()

  const dispatch = useDispatch()
  const handle_save_post = () => {
    set_request_running(true)
    dispatch(post(description, props.route.params.source))
      .then(() => NAVIGATION.dispatch(StackActions.popToTop()))
      .catch(() => set_request_running(false))
  }
  if (request_running) {
    return (
      <View style={styles.upload}>
        <ActivityIndicator size={70} />
      </View>
    )
  }
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
          onChangeText={(text) => set_description(text)}
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
          onPress={() => handle_save_post()}
        >
          <MaterialCommunityIcons style={styles.confirm}
            name="checkbox-marked-circle-outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
