import React, { useImperativeHandle, useRef } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import Post from '../../components/post'

export default function Feed_Screen() {
  const array = [1, 2, 3, 4, 5, 6]
  const refs = useRef([])

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach(element => {
      const cell = refs.current[element.key]
      if (cell) {
        if (element.isViewable) {
          cell.play()
        }
        else {
          cell.stop()
        }
      }
    });
  })

  const renderItem = ({ item, index }) => {
    return (
      <View style={[{ flex: 1, height: Dimensions.get('window').height }, index % 2 == 0 ? { backgroundColor: 'red' } : { backgroundColor: 'black' }]}>
        <Post ref={ref => (refs.current[item] = ref)} />
      </View >
    )
  }

  return (
    <View>
      <FlatList
        data={array}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 60
        }}
        renderItem={renderItem}
        keyExtractor={item => item}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}
