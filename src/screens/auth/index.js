import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import AuthMenu from '../../components/auth/menu';
import styles from './styles';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Video
        style={styles.video}
        source={require('../../../assets/authentication_background.mp4')}
        resizeMode='cover'
        shouldPlay={true}
        isLooping={true}
        rate={1}
        muted={true}
      />
      <Image source={require('../../../assets/logo.png')}></Image>
      <AuthMenu />
    </View>
  )
}
