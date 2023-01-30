import firebase from 'firebase'
require('firebase/firebase-auth')

export const sign_in = (email, password) =>
  dispatch =>
    new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
    })

export const sign_up = (email, password) =>
  dispatch =>
    new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
