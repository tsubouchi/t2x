'use client'

import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getDatabase, Database } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAenxbkrBHFg8oKaVW6aAYgLxNy7xNrZBc",
  authDomain: "t2x-platform-2d9bb.firebaseapp.com",
  projectId: "t2x-platform-2d9bb",
  storageBucket: "t2x-platform-2d9bb.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:1234567890",
  databaseURL: "https://t2x-platform-2d9bb-default-rtdb.asia-southeast1.firebasedatabase.app"
}

// Initialize Firebase only on the client side
let firebase = {
  app: null as FirebaseApp | null,
  auth: null as Auth | null,
  database: null as Database | null,
}

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    firebase.app = initializeApp(firebaseConfig)
  } else {
    firebase.app = getApps()[0]
  }
  
  if (firebase.app) {
    firebase.auth = getAuth(firebase.app)
    firebase.database = getDatabase(firebase.app)
  }
}

export const { app, auth, database } = firebase 