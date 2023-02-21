import { Video } from 'expo-av'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export const Single_Post = forwardRef(({ item }, parent_ref) => {
  const ref = useRef(null);
  useImperativeHandle(parent_ref, () => ({
    play,
    unload,
    stop
  }))

  useEffect(() => {
    return () => unload();
  }, [])


  const play = async () => {
    if (ref.current == null) {
      return;
    }

    // if video is already playing return
    const status = await ref.current.getStatusAsync();
    if (status?.isPlaying) {
      return;
    }
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.log(e)
    }
  }


  const stop = async () => {
    if (ref.current == null) {
      return;
    }

    // if video is already stopped return
    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) {
      return;
    }
    try {
      await ref.current.stopAsync();
    } catch (e) {
      console.log(e)
    }
  }


  const unload = async () => {
    if (ref.current == null) {
      return;
    }

    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Video style={styles.video}
      ref={ref}
      resizeMode={'cover'}
      shouldPlay={false}
      isLooping
      source={{ uri: 'https://archive.org/download/mov-bbb/mov_bbb.mp4' }}
    />
  )
})

export default Single_Post
