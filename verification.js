// After pressing the submit button, there will be alert message on the Support Page 
// Redirecting you back to the homepage
function feedbackMessage() {
  alert("Thank you for filling in your feedback!");
}

// After pressing the login button, there will be alert message on the Login Page, stating your name, email and password
// Redirecting you back to the homepage
function loginMessage() {
  let username = document.getElementById("name").value;
  let emailAddr = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  alert("Thank you for filling in your details.")
  alert("Name: " + username);
  alert("Email: " + emailAddr);
  alert("Password: " + password);
}

// After pressing the add to cart button, there will be alert message on the shop page
// Redirecting you back to the homepage
function cartMessage() {
  alert("Thank you for shopping at our shop.") 
}

// After filling in your contact details, and pressing the button, there will be alert message on the contact page
// Redirecting you back to the homepage
function contactMessage() {
  alert("Thank you for keying in your details. We will update you on your email account.")
}
