import { StyleSheet, useWindowDimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 30
  },
  cancel: {
    backgroundColor: '#FF5555',
    color: '#FFFFFF',
    fontSize: 100,
    borderRadius: 100
  },
  confirm: {
    backgroundColor: '#00FF55',
    color: '#FFFFFF',
    fontSize: 100,
    borderRadius: 100
  },
  upload: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
