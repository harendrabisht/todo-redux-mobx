import {Constants} from './Constant';
import firebase from 'firebase';
import {initializeAuth, authSuccess, authError, doLogout} from './Actions/UserAction';
import {getTodoSuccess, getTodoError, fetchRequest} from './Actions/ToDoAction';
import {
    fire,
    facebookProvider,
    googleProvider,
    githubProvider,
    firebaseDatabase
} from './firebase';

export const initializeAuthorization = () => dispatch => {
    dispatch(fetchRequest(true));
    fire
        .auth()
        .onAuthStateChanged((result, error) => {
            dispatch(initializeAuth(result));
            dispatch(fetchRequest(false));
        });
}

export const logout = () => dispatch => {
    fire
        .auth()
        .signOut()
        .then(user => {
            dispatch(doLogout());
        })
}

export const SetupGithubLogin = () => (dispatch) => {
    fire
        .auth()
        .signInWithPopup(githubProvider)
        .then((result, error) => {
            if (error) 
                dispatch(authError(result));
            else 
                dispatch(authSuccess(result));
            }
        );
}
export const SetupFacebookLogin = () => (dispatch) => {
    fire
        .auth()
        .signInWithPopup(facebookProvider)
        .then((result, error) => {
            if (error) 
                dispatch(authError(error));
            else 
                dispatch(authSuccess(result));
            }
        );
}
export const SetupGoogleLogin = () => (dispatch) => {
    fire
        .auth()
        .signInWithPopup(googleProvider)
        .then((result, error) => {
            if (error) 
                dispatch(authError(result));
            else 
                dispatch(authSuccess(result));
            }
        );
}

export const getTodos = (userid) => dispatch => {
    // dispatch(fetchRequest(true));
    let {DATABASE} = Constants;
    let todos = firebaseDatabase.ref(`${DATABASE}/${userid}`);
    todos.on("value", snapshot => {
        dispatch(getTodoSuccess(snapshot.val() || {}), fetchRequest(false));

    }, error => {
        dispatch(getTodoError(error), fetchRequest(false));
    })
}

export const createTodos = (userid, todos) => dispatch => {
    let {DATABASE} = Constants;
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

export const deleteTodo = (userid, id)=>dispatch=>{
    let {DATABASE} = Constants;
    firebase
    .database()
    .ref(`${DATABASE}/${userid}/${id}`)
    .remove();
}