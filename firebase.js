import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsgb5Ri0DRK9gE0nJ0PYCh9BLByhbJatE",
  authDomain: "rn-uber-eats-clone-yt.firebaseapp.com",
  projectId: "rn-uber-eats-clone-yt",
  storageBucket: "rn-uber-eats-clone-yt.appspot.com",
  messagingSenderId: "791658363133",
  appId: "1:791658363133:web:91e4fe1be6f3f23467a694",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
