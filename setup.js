// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4wNTQslInVVxPxq4EcKQe2MR_gIbaEBM",
  authDomain: "fir-class-smit.firebaseapp.com",
  projectId: "fir-class-smit",
  storageBucket: "fir-class-smit.appspot.com",
  messagingSenderId: "182752865318",
  appId: "1:182752865318:web:e695f1438c196f1d2c8ae7",
  measurementId: "G-K8MN086HXV",
});

// Initialize Firebase

const auth = firebaseApp.auth();
function signupcall() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  console.log(email.value);
  console.log(password.value);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

const db = firebaseApp.firestore();
function createdata() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  console.log(email.value);
  console.log(password.value);
  db.collection("user")
    .add({
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert("asdasda");
      console.log(err);
    });
}
