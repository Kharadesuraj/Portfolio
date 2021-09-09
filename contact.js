// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDNJo9PkKPCY3_JVp5ZNprfbGiSTOCOoY",
    authDomain: "surajkharade-4d1ed.firebaseapp.com",
    projectId: "surajkharade-4d1ed",
    storageBucket: "surajkharade-4d1ed.appspot.com",
    messagingSenderId: "925187282485",
    appId: "1:925187282485:web:ad188f98a496944512c37c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Refernece contactinfo collections

let contactInfo = firebase.database().ref("infos");

// listen for submit
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();

    // get input values

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;;
    let subject = document.querySelector("#subject").value;;
    let message = document.querySelector("#message").value;;
    console.log(name, email, subject, message);
    
    //saveContactInfo(name, email, subject, message);
    
    document.querySelector(".contact-form").reset();
}

// save infos to firebase

function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}