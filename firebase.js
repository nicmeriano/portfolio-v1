// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyA9d8cNN9r-xsPZzLJLijZLk2xiYBqKPvM",
  authDomain: "portfolio-c979d.firebaseapp.com",
  databaseURL: "https://portfolio-c979d.firebaseio.com",
  projectId: "portfolio-c979d",
  storageBucket: "portfolio-c979d.appspot.com",
  messagingSenderId: "407442266764",
  appId: "1:407442266764:web:8465d60e4bcc1560"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//reference message collection

let messagesRef = firebase.database().ref("messages");

//save message to firebase

function saveMessage(name, email, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}

// listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // get form values

  

  let name = getInputVal("name");
  let email = getInputVal("email");
  let message = getInputVal("message");

  saveMessage(name, email, message);

  // show alert
  document.querySelector('.alert').style.display = "block";
  setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
  }, 3000)

  document.getElementById("contactForm").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}


