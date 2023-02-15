import { save_media_to_storage } from "./random"
import firebase from 'firebase'

export const save_user_profile_image = (image) => new Promise((resolve, reject) => {
  save_media_to_storage(image, `profileImage/${firebase.auth.currentUser.uid}`).then((res) => {
    firebase.firestore()
      .collection('user')
      .doc(firebase.currentUser.uid)
      .update({
        photoURL: res
      })
      .then(() => resolve())
      .catch(() => reject())
  })
})
