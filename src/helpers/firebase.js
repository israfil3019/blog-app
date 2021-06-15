import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});
// try {
//   firebase.initializeApp(firebaseApp);
// } catch (err) {
//   if (!/already exists/.test(err.message)) {
//     console.error("Firebase initialization error", err.stack);
//   }
// }

// const database = firebase.firestore();
// const storage = firebase.storage();

export const addCard = (post) => {
  const postRef = firebase.database().ref("posts");
  postRef.push(post);
};
export const removeCard = (id) => {
  const postRef = firebase.database().ref("posts").child(id);
  postRef.remove();
};

export const updateCard = (info) => {
  const postRef = firebase.database().ref("posts").child(info.id);
  postRef.update(info);
};

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

export const SignOut = async (history) => {
  await firebase.auth().signOut();
  history.push("/");
};

export const SignUpProvider = async (history) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    promt: "select_account",
  });
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      if (result) history.push("/");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default firebaseApp;
