import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

export default function Feed_Screen() {
  const array = [1, 2, 3, 4, 5, 6]
  const renderItem = ({ item, index }) => {
    return (
      <View style={[{ flex: 1, height: Dimensions.get('window').height }, index % 2 == 0 ? { backgroundColor: 'red' } : { backgroundColor: 'black' }]}>
        <Text>{item}</Text>
      </View >
    )
  }
  return (
    <View>
      <FlatList
        data={array}
        renderItem={renderItem}
      />
    </View>
  )
}
