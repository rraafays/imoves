import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import Post from '../../components/post'
import styles from './styles'
import { getFeed } from '../../services/posts'

export default function Feed_Screen() {
  const array = [1, 2, 3, 4, 5, 6]
  const [posts, setPosts] = useState([])
  const mediaRefs = useRef([])

  const x = useBottomTabBarHeight()

  useEffect(() => {
    getFeed().then(setPosts)
  }, [])

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
      <View style={[{ flex: 1, height: Dimensions.get('window').height - x }, index % 2 === 0 ? { backgroundColor: 'red' } : { backgroundColor: 'black' }]}>
        <Post item={item} ref={SinglePostRef => (mediaRefs.current[item.id] = SinglePostRef)} />
      </View >
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={4}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70
        }}
        renderItem={renderItem}
        pagingEnabled={true}
        keyExtractor={item => item.id}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}
