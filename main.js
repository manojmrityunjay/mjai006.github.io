// setting up firebase with our website

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1mE1X3aesyR6RBNkgTdmp5cpyznoWBqo",
    authDomain: "manojvs-auth-form.firebaseapp.com",
    projectId: "manojvs-auth-form",
    storageBucket: "manojvs-auth-form.appspot.com",
    messagingSenderId: "339489542410",
    appId: "1:339489542410:web:ed2ac8a403e3b0f93e6af3" 
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}