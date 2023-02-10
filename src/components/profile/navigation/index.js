import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Avatar, Button } from 'react-native-paper'
import styles from './styles'
import * as ImagePicker from 'expo-image-picker'
import save_user_profile_image from '../../../services/user'
import { useSelector } from 'react-redux'

export default function Navigation({ USER }) {
  const auth = useSelector(state => state.auth)
  const PICK_AVATAR = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })
    if (!result.canceled) { save_user_profile_image(result.uri) }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <TouchableOpacity
        onPress={() => PICK_AVATAR()}
      >
        <Avatar.Icon style={styles.profile} size={170} icon={'baby-face'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.title}>{USER.displayName}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.coins}>
          <MaterialCommunityIcons name='alpha-i-circle' style={styles.coins} />{' '}
          0
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Button mode='contained' style={styles.favourites} buttonColor='#FF5555'>
          <MaterialCommunityIcons name='heart' />{' '}favourites
        </Button>
      </TouchableOpacity>
    </View>
  )
}
