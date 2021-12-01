const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const userDetails = document.getElementById('userDetails');

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});









// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import{ getAuth,  onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs, getDoc } from ' firebase/firestore';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyArjNqBqteKf1_SKZjGITuKwGWoooFDIGo",
//   authDomain: "dashboat-794b9.firebaseapp.com",
//   projectId: "dashboat-794b9",
//   storageBucket: "dashboat-794b9.appspot.com",
//   messagingSenderId: "733127597435",
//   appId: "1:733127597435:web:103c4fa53d67d2bb3171de",
//   measurementId: "G-6HZTZYMP01"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth  = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// db.collection('todos').getDocs();
// const todosCol  = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

// // Detect auth state
// onAuthStateChanged (auth, user => {
//     if(user  =! null) {
//         console.log('logged in!');
//     } else {
//         console.log('No user');
//     }
// });