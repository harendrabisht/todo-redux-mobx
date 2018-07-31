import firebase from 'firebase';

  // Initialize Firebase
  let config = {
    apiKey: "*********************************",
    authDomain: "todo-redux-flux.firebaseapp.com",
    databaseURL: "https://todo-redux-flux.firebaseio.com",
    projectId: "todo-redux-flux",
    storageBucket: "todo-redux-flux.appspot.com",
    messagingSenderId: "**************"
  };
export const fire = firebase.initializeApp(config);
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const firebaseDatabase =  firebase.database();
export const todosFirebase = firebaseDatabase.ref('todos');