import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGqW725V6jTD62bKGgPczPhgo8BXJRGRY",
  authDomain: "blog-app-f84db.firebaseapp.com",
  databaseURL: "https://blog-app-f84db-default-rtdb.firebaseio.com",
  projectId: "blog-app-f84db",
  storageBucket: "blog-app-f84db.appspot.com",
  messagingSenderId: "452848735159",
  appId: "1:452848735159:web:232ecb65217dc2347d8e32",
});

export const createUser = async (email, password, displayName, history) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("REGISTERED some USER : ", user);
        history.push("/login");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(
          "line 30 ~ createUser ~ errorMessage",
          errorMessage,
          errorCode
        );
        alert(errorMessage);
        // ..
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    console.log("sth wrong...");
  }
};

export const SignIn = async (email, password, history) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("LOGIN some USER : ", user);
      history.push("/");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage, errorCode);
    });
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

export const SignOut = (history) => {
  firebase.auth().signOut();
  history.push("/login");
};

export const SignUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    promt: "select_account",
  });
  firebase.auth().signInWithPopup(provider);
};

export default firebaseApp;
