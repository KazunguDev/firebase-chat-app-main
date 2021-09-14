import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3rlTi6_waYNf8g_OYNW2rFF7E5oI-8yI",
    authDomain: "fir-chat-7f017.firebaseapp.com",
    projectId: "fir-chat-7f017",
    storageBucket: "fir-chat-7f017.appspot.com",
    messagingSenderId: "778762282138",
    appId: "1:778762282138:web:6c2fac597260044c096b23",
    measurementId: "G-Q6D0VGL0F8"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }