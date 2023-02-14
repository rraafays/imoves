import { StyleSheet, useWindowDimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#702F8A'
  },
  video: {
    alignSelf: 'center',
    aspectRatio: 1 / 1,
    width: '100%'
  },
  title: {
    backgroundColor: '#E0E0E0'
  },
  buttons: {
  },
  cancel: {
    backgroundColor: '#FF5555',
    alignItems: 'center',
    textAlign: 'center',
    color: '#E0E0E0',
    fontSize: 100,
    width: '50%',
    height: '100%'
  }
})

export default styles
