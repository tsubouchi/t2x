'use client'

import { initializeApp } from 'firebase/app'
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

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

export { app, auth, database } 