import { Video } from 'expo-av'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export const Post = forwardRef((props, parent_ref) => {
  const ref = useRef(null)
  useImperativeHandle(parent_ref, () => ({
    play, stop, unload
  }))

  useEffect(() => {
    return () => { unload() }
  }, [])

  const play = async () => {
    if (ref.current == null) {
      return;
    }
    const status = await ref.current.getStatusAsync()
    if (status?.isPlaying) {
      return;
    }
    try { await ref.current.playAsync() }
    catch (e) { console.log(e) }
  }

  const stop = async () => {
    if (ref.current == null) {
      return;
    }
    const status = await ref.current.getStatusAsync()
    if (!status?.isPlaying) {
      return;
    }
    try { await ref.current.stopAsync() }
    catch (e) { console.log(e) }
  }

  const unload = async () => {
    if (ref.current == null) {
      return;
    }
    try { await ref.current.unloadAsync() }
    catch (e) { console.log(e) }
  }

  return (
    <Video style={styles.video}
      ref={ref}
      resizeMode='cover'
      shouldPlay={false}
      isLooping={true}
      rate={1}
      source={{ uri: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' }}
    />
  )
})

export default Post
