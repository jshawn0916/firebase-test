// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getDatabase, ref, child, get, onValue} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGLXENP1gbC_xdQ5M-bSGZsd2Re0Sk9qo",
  authDomain: "test123-66ba7.firebaseapp.com",
  projectId: "test123-66ba7",
  storageBucket: "test123-66ba7.appspot.com",
  messagingSenderId: "460034255952",
  appId: "1:460034255952:web:a05e646249ce300a9cb555",
  measurementId: "G-F09GT04VJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const messages = ref(database,'/messages');
onValue(messages, (snapshot) => {
    const ul = document.getElementById("messages");
    // console.log(111111111111);
    // console.log(snapshot);
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        const li = document.createElement("li");
        li.textContent = childData.message;
        ul.appendChild(li);
        console.log(childKey);
        console.log(childData);
    })
},{
    onlyOnce : false,
})
// const analytics = getAnalytics(app);