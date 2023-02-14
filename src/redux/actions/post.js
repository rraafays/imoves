import firebase from 'firebase'
import { save_to_storage } from './random'
require('firebase/firebase-auth')
require('firebase/firestore')
import uuid from 'uuid-random'

export const post = (description, video) =>
  dispatch =>
    new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
      save_to_storage(video, `post/${firebase.auth().currentUser.uid}/${uuid()}`)
        .then((res) => {
          firebase.firestore()
            .collection('post')
            .add({
              creator: firebase.auth().currentUser.uid,
              downloadURL,
              description
            })
        })
    })
