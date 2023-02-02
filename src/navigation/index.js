import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function Route() {
  const user = useSelector(state => state.auth)
  console.log(user)

  return (
    <View>
      <Text>i will direct the screens</Text>
    </View>
  )
}
