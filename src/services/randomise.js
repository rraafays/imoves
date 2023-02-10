import firebase from 'firebase'
require('firebase/firebase-storage')

export const save_media_to_storage = (media, path) => new Promise((resolve, reject) => {
  const ref = firebase.storage().ref().child(path)

  fetch(media)
    .then(response => response.blob())
    .then(blob => ref.put(blob))
    .then(task => task.ref.getDownloadURL())
    .then(downloadUrl => resolve(downloadUrl))
    .catch(() => reject())
})
