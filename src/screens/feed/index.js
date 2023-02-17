import React, { useImperativeHandle, useRef } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import Post from '../../components/post'
import styles from './styles'

export default function Feed_Screen() {
  const array = [1, 2, 3, 4, 5, 6]
  const mediaRefs = useRef([])

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach(element => {
      const cell = mediaRefs.current[element.key]
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
      <View style={[{ flex: 1, height: Dimensions.get('window').height }, index % 2 === 0 ? { backgroundColor: 'red' } : { backgroundColor: 'black' }]}>
        <Post ref={SinglePostRef => (mediaRefs.current[item] = SinglePostRef)} />
      </View >
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={4}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70
        }}
        renderItem={renderItem}
        pagingEnabled={false}
        keyExtractor={item => item}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}
