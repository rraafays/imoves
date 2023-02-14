import firebase from 'firebase'
require('firebase/firebase-storage')
require('firebase/firestore')

export const save_to_storage = (media, path) =>
  dispatch =>
    new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
      const file_ref = firebase.storage().ref().child(path)
      fetch(media)
        .then(response => response.blob())
        .then(blob => file_ref.put(blob))
        .then(task => task.ref.getDownloadURL())
        .then(download => resolve(downloadURL))
    })
