'use client'

import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAenxbkrBHFg8oKaVW6aAYgLxNy7xNrZBc",
  authDomain: "t2x-platform-2d9bb.firebaseapp.com",
  projectId: "t2x-platform-2d9bb",
  storageBucket: "t2x-platform-2d9bb.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:1234567890",
  databaseURL: "https://t2x-platform-2d9bb-default-rtdb.asia-southeast1.firebasedatabase.app"
}

console.log('Firebase: Initializing with config', firebaseConfig)

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
console.log('Firebase: App initialized')

let auth = getAuth(app)
console.log('Firebase: Auth initialized')

let database = getDatabase(app)
console.log('Firebase: Database initialized')

export { app, auth, database } 