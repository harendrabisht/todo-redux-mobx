import {Constants} from './../Constant';

export const initializeAuth = user=>({
    type: Constants.AUTH_INITIALIZE,
    user
});
export const doLogout = ()=>({
    type:Constants.LOGOUT
});
export const authSuccess = user => ({
    type : Constants.AUTH_SUCCESS,
    user
});

export const authError = error => ({
    type : Constants.AUTH_ERROR,
    error
})