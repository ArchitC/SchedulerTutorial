import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA2YKd6febv_Cga2Geru5NpxxL1sp4hJOA",
    authDomain: "sched-696f9.firebaseapp.com",
    databaseURL: "https://sched-696f9-default-rtdb.firebaseio.com",
    projectId: "sched-696f9",
    storageBucket: "sched-696f9.appspot.com",
    messagingSenderId: "639435575691",
    appId: "1:639435575691:web:5c5bcbdb31a1b12a745f8e",
    measurementId: "G-211L2J5E01"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };
