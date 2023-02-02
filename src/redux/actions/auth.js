import { USER_STATE_CHANGE } from '../constants'

import firebase from 'firebase'
require('firebase/firebase-auth')

export const signed_in = () => dispatch => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(get_user_data())
    }
    else {
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true })
    }
  })
}

export const get_user_data = () => {
  firebase.firestore()
    .collection('user')
    .doc(firebase.auth().currentUser.uid)
    .onSnapshot((res) => {
      if (res.exists) { return dispatch({ type: USER_STATE_CHANGE, currentUser: res.data(), loaded: true }) }
    })
}

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
