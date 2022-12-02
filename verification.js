function feedbackMessage() {
  alert("Thank you for filling in your feedback!");
}

function loginMessage() {
  let username = document.getElementById("name").value;
  let emailAddr = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  alert("Thank you for filling in your details.")
  alert("Name: " + username);
  alert("Email: " + emailAddr);
  alert("Password: " + password);
}

function cartMessage() {
  alert("Thank you for shopping at our shop.") 
}

function contactMessage() {
  alert("Thank you for keying in your details. We will update you on your email account.")
}
