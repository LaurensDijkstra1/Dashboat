import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
} from'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArjNqBqteKf1_SKZjGITuKwGWoooFDIGo",
    authDomain: "dashboat-794b9.firebaseapp.com",
    projectId: "dashboat-794b9",
    storageBucket: "dashboat-794b9.appspot.com",
    messagingSenderId: "733127597435",
    appId: "1:733127597435:web:103c4fa53d67d2bb3171de",
    measurementId: "G-6HZTZYMP01"
  };

  // init firebase app
  initializeApp(firebaseConfig)

  // init services
  const db = getFirestore()

  // collection ref
  const  colRef = collection(db, 'Vessels')

  // get collection data
  getDocs(colRef)
  .then((snapshot) => {
      let Vessels = []
      snapshot.docs.forEach((doc)  => {
          Vessels.push({...doc.data(), id: doc.id })
      })
      console.log(Vessels)
  })
  .catch(err => {
      console.log(err.message)
  })

  // adding documents
  const addVesselForm = document.querySelector('.add')
  addVesselForm.addEventListener('submit', (e) => {
      e.preventDefault()

      addDoc(colRef, {
        title: addVesselForm.title.value,
        author: addVesselForm.author.value,
      })
      .then(() => {
        addVesselForm.reset()
      })
  })

  // deleting documents
  const deleteVesselForm = document.querySelector('delete')
  deleteVesselForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const docRef = doc(db, 'Vessels', deleteVesselForm.id.value)

        deleteDoc(docRef)
            .then(() => {
                deleteVesselForm.reset()
         })
  })