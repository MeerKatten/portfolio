

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

