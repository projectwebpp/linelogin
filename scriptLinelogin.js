const loginContainer = document.getElementById("loginContainer");
const loggedInContainer = document.getElementById("loggedInContainer");

const lineLoginButton = document.getElementById("lineLoginButton");

const clientId = "1656079273"; // channel's client ID
const clientSecret = '3a89b09257faa9151c20e3eca4baec36'; // channel's Secret




lineLoginButton.addEventListener("click", () => {
  // Redirect 
  window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${window.location.origin}/pageme.html&state=6789abcde&scope=profile openid email&nonce=01234xyz`;
  loadstart()


});



function loadstart() {
  document.querySelector(".loader-container").classList.remove("d-none")
}
function loadend() {
  document.querySelector(".loader-container").classList.add("d-none")
}
