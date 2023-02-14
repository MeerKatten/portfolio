
  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
/*   import { initializeApp } from "firebase/app"; */
  import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
/*   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; */
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqM6LGBdK4vooiMfvWDll6k1WNYNys3tY",
    authDomain: "va-portfolio-2a9b0.firebaseapp.com",
    projectId: "va-portfolio-2a9b0",
    storageBucket: "va-portfolio-2a9b0.appspot.com",
    messagingSenderId: "1098691311976",
    appId: "1:1098691311976:web:0634dbdcea2f8c538e7edd"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  document.getElementById("signup-button").addEventListener("click", signUp);
  document.getElementById("login-button").addEventListener("click", logIn);
  
  function signUp() {
    // Get user input
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        // User signed up successfully
        console.log("Sign up successful");
      })
      .catch(function(error) {
        // An error occurred
        console.error("Error signing up user:", error);
      });
  } 
  
  function logIn() {
    // Get user input
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    // Log in the user
    auth.signInWithEmailAndPassword(email, password)
      .then(function(user) {
        // User logged in successfully
        console.log("Login successful");
      })
      .catch(function(error) {
        // An error occurred
        console.error("Error logging in user:", error);
      });
  }