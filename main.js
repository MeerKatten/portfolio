

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// Toggle darkmode when user presses settings button. Save state to local storage if needed, load if there's a saved state.
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const settings = document.getElementById("settings")
  settings.addEventListener("click", changeMode, false);

  function changeMode(){
    if(localStorage.theme != 'dark'){
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
  };

  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const showSignupForm = document.getElementById("show-signup-form");
  const showLoginForm = document.getElementById("show-login-form");

  document.getElementById("show-signup-form").addEventListener("click", function() {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
/*     showSignupForm.classList.add("hidden");
    showLoginForm.classList.remove("hidden"); */

  });

  document.getElementById("show-login-form").addEventListener("click", function() {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
/*     showSignupForm.classList.remove("hidden");
    showLoginForm.classList.add("hidden"); */
  });


  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById("signup-button").addEventListener("click", signUp);
document.getElementById("login-button").addEventListener("click", logIn);

function signUp() {
  // Get user input
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Sign up the user
  firebase.auth().createUserWithEmailAndPassword(email, password)
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
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Log in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      // User logged in successfully
      console.log("Login successful");
    })
    .catch(function(error) {
      // An error occurred
      console.error("Error logging in user:", error);
    });
}