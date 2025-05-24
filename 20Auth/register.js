// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmMiBk1dLgJa3o9xLuFe7m4DAolUA07gc",
    authDomain: "auth-4beed.firebaseapp.com",
    projectId: "auth-4beed",
    storageBucket: "auth-4beed.firebasestorage.app",
    messagingSenderId: "850183551916",
    appId: "1:850183551916:web:98c16da46a76fc3b9e9809"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const submit =  document.getElementById("submit");

submit.addEventListener("click",function(event){
    event.preventDefault()


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("Gay correct")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error")
  });
})