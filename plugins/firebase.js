import firebase from 'firebase/app'
import '@firebase/auth'
import 'firebase/firestore'
require('firebase/firestore')
// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyCC7v18RaUB2W-FdxH5nh0NXFzQsv1EnJs',
  authDomain: 'fir-account-ae112.firebaseapp.com',
  databaseURL: 'https://fir-account-ae112.firebaseio.com',
  projectId: 'fir-account-ae112',
  storageBucket: 'fir-account-ae112.appspot.com',
  messagingSenderId: '916219746291',
  appId: '1:916219746291:web:71eb440ec484892e0ea48'
}
// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = null
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}
export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase
