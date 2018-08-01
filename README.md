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

## `firebase init`
To initialize your app, to host in firebase

-- firebase.json [https://github.com/harendrabisht/todo-redux-mobx/blob/redux-firebase/firebase.json]

## `firebase deploy`

To deploy your app on firebase.

## `Implement firebase Authentication`


