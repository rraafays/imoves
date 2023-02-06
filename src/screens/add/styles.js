import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    padding: 30,
    flex: 1
  },
  camera: {
    position: 'absolute',
    top: -100,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 0,
    aspectRatio: 9 / 16
  },
  bottom_overlay: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row'
  },
  button_box: {
    flex: 1,
    marginHorizontal: 30
  },
  record_button: {
    borderWidth: 8,
    borderColor: '#FF000060',
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginBottom: 20
  }
});

export default styles;
