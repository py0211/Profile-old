import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDSfsoT8B1MyvdTJhEwFytvXG3s2-SeFKg",
  authDomain: "py-profile.firebaseapp.com",
  projectId: "py-profile",
  storageBucket: "py-profile.appspot.com",
  messagingSenderId: "899803661895",
  appId: "1:899803661895:web:e06b1eb7c7fbbfebe51362",
  measurementId: "G-1TPZQKQJN8"
}

firebase.initializeApp(firebaseConfig)

export default firebase