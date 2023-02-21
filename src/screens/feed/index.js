import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import Single_Post from '../../components/post'
import styles from './styles'
import { getFeed } from '../../services/posts'

export default function FeedScreen({ route }) {
  const NAVBAR_HEIGHT = useBottomTabBarHeight()
  const media_refs = useRef([])
  const array = [1, 2, 3, 4, 5, 6]

  const on_viewable_items_changed = useRef(({ changed }) => {
    changed.forEach(element => {
      const cell = media_refs.current[element.key]
      if (cell) {
        if (element.isViewable) { cell.play(); } else { cell.stop(); }
      }
    });
  })

  const render_item = ({ item, index }) => {
    return (
      <SafeAreaView style={[{ flex: 1, height: Dimensions.get('window').height - NAVBAR_HEIGHT }, index % 2 ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
        <Single_Post ref={Single_Post_Ref => (media_refs.current[item] = Single_Post_Ref)} />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={array}
        renderItem={render_item}
        pagingEnabled={true}
        keyExtractor={item => item}
        viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
        onViewableItemsChanged={on_viewable_items_changed.current}
      />
    </SafeAreaView>
  )
}
