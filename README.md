This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
Demo [here]
(https://todo-redux-flux.firebaseapp.com)



## Folder Structure

```
REACT-REDUX/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    img/

  src/
    Common/
      Button.js
      Input.js
      ...
    Redux
      Action/
        TodoAction.js
        UserAction.js
      Components/
        HeaderComponent.js
        LoginComponents.js
        ...
      Containers/
        Header.js
        Login.js
        ...
      Reducers/
        TodoReducer.js
        UserReducer.ks
      Constant.js
      firebase.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `firebase init`
To initialize your app, to host in firebase

-- firebase.json [https://github.com/harendrabisht/todo-redux-mobx/blob/redux-firebase/firebase.json]

### `firebase deploy`

To deploy your app on firebase.

## `Implementation firebase for authentication using Facebook, Google, Github ...`

Create Project in firebase and get the webap configuration 

#### npm install firebase --save

import firebase from 'firebase';

```javascript
  // Initialize Firebase
  var config = {
    apiKey: "*************************",
    authDomain: "myapp.firebaseapp.com",
    databaseURL: "https://myapp.firebaseio.com",
    projectId: "myapp",
    storageBucket: "myapp.appspot.com",
    messagingSenderId: "#########"
  };
```
-- firebase.js
```javascript
export const fire = firebase.initializeApp(config);
```
-- Authentication using thirdparty platform (Google, facebook, github)

For facebook and github, you need to create your app in developer setting.

##### [facebook configuation]
  (https://firebase.google.com/docs/auth/web/facebook-login?authuser=0)

##### [Github Configuration]
  (https://firebase.google.com/docs/auth/web/github-auth?authuser=0)

I used thunkmiddleware to handle async request with redux.

```javascript   
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
```


-- thunkmiddleware.js

```javascript
      fire
        .auth()
        .signInWithPopup(facebookProvider/googleProvider/githubProvider)
```

-- Implementation Realtime database 

The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our iOS, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.

#### Read/write data 
To read or write data from the database, you need an instance of firebase.database.Reference:

```javascript
// Get a reference to the database service
var database = firebase.database();

//basic operation

export const addTodos(userid, todos) {
  firebase
        .database()
        .ref(`${DATABASE}/${userid}`)
        .push(todos);
}

export const updateTodos = (userid, todo) => dispatch => {
    let {DATABASE} = Constants;
    let {id, title, isPin, done} = todo;

    firebase
        .database()
        .ref(`${DATABASE}/${userid}/${id}`)
        .set({title, done, isPin});
}


