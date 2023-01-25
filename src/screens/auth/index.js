import React from 'react';
import { View, Text, Image } from 'react-native';
import AuthMenu from '../../components/auth/menu';
import styles from './styles';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')}></Image>
      <AuthMenu />
    </View>
  )
}
