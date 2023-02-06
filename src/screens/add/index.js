import React, { useEffect, useState } from 'react'
import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { Audio } from 'expo-av'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useIsFocused } from '@react-navigation/native'
import styles from './styles'

export default function AddScreen() {
  const focus = useIsFocused()

  const [camera_permissions, set_camera_permissions] = useState(false)
  const [audio_permissions, set_audio_permissions] = useState(false)
  const [gallery_permissions, set_gallery_permissions] = useState(false)

  const [videos, add_video] = useState([])
  const [camera_ref, set_camera_ref] = useState(null)
  const [camera_type, set_camera_type] = useState(Camera.Constants.Type.back)
  const [camera_flash, set_camera_flash] = useState(Camera.Constants.FlashMode.off)
  const [camera_ready, set_camera_ready] = useState(false)

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

  const record_video = async () => {

  }

  if (!camera_permissions || !audio_permissions || !gallery_permissions) { return (<View></View>) }
  return (
    <View style={styles.container}>
      {
        focus ?
          <Camera
            ref={ref => set_camera_ref(ref)}
            style={styles.camera}
            ratio={'16:9'}
            type={camera_type}
            flashMode={camera_flash}
            onCameraReady={() => set_camera_ready(true)}
          />
          :
          null
      }
      <View style={styles.bottom_overlay}>
        <View style={styles.button_box}>
          <TouchableOpacity style={styles.record_button}
            disabled={!camera_ready}
            onLongPress={() => record_video()}
          />
        </View>
      </View>
    </View>
  )
}
