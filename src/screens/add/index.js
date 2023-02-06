import React, { useEffect, useState } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { Camera } from 'expo-camera'
import { Audio } from 'expo-av'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useIsFocused } from '@react-navigation/native'
import styles from './styles'

export default function AddScreen() {
  const [camera_permissions, set_camera_permissions] = useState(false)
  const [audio_permissions, set_audio_permissions] = useState(false)
  const [gallery_permissions, set_gallery_permissions] = useState(false)

  const [videos, add_video] = useState([])
  const focus = useIsFocused()

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  useEffect(() => {
    (async () => {
      const camera = await Camera.requestPermissionsAsync()
      set_camera_permissions(camera.status == 'granted')
      const audio = await Audio.requestPermissionsAsync()
      set_audio_permissions(audio.status == 'granted')
      const gallery = await ImagePicker.requestMediaLibraryPermissionsAsync()
      set_gallery_permissions(gallery.status == 'granted')

      if (gallery.status == 'granted') {
        const media = await MediaLibrary.getAssetsAsync({ sortBy: ['creationTime'], mediaType: ['video'] })
        add_video(media)
      }
    })()
  }, [])

  if (!camera_permissions || !audio_permissions || !gallery_permissions) { return (<View></View>) }
  return (
    <View style={styles.container}>
      {
        focus ?
          <Camera
            style={styles.camera}
          />
          :
          null
      }
    </View>
  )
}
