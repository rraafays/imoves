import firebase from 'firebase'
import { save_to_storage } from './random'
require('firebase/firebase-auth')
require('firebase/firestore')
import uuid from 'uuid-random'

export const post = (description, video) =>
  dispatch =>
    new Promise((resolve, reject) => {
      save_to_storage(video, `post/${firebase.auth().currentUser.uid}/${uuid()}`)
        .then((res) => {
          firebase.firestore()
            .collection('post')
            .add({
              creator: firebase.auth().currentUser.uid,
              downloadURL,
              description,
              creation: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => resolve())
            .catch(() => reject())
        })
        .catch(() => reject())
    })
