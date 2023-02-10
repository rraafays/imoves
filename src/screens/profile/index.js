import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Navigation from '../../components/profile/navigation'
import styles from './styles'

export default function Profile_Screen() {
  const USER = useSelector(STATE => STATE.auth.currentUser)

  return (
    <View style={styles.container}>
      <Navigation USER={USER} />
    </View>
  )
}
