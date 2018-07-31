import {Constants} from './../Constant';

let initialState = {
    user: {
        displayName: null,
        email: null,
        photoURL: null,
        refreshToken: null,
        uid:null
    },
    isAuth: false
};
export const UserAuthentication = (state = initialState, action) => {
    let {
        AUTH_INITIALIZE,
        AUTH_SUCCESS,
        AUTH_ERROR,
        LOGOUT
    } = Constants;
    let {user} = action;
    let stateParam = user
        ? user
        : initialState;
    let {displayName, email, photoURL, refreshToken, uid} = stateParam;
    switch (action.type) {
        case AUTH_INITIALIZE:
            if (displayName) {
                return Object.assign({}, state, {
                    'user': {
                        displayName,
                        email,
                        photoURL,
                        refreshToken,
                        uid
                    },
                    isAuth: true
                });
            } else {
                return initialState;
            }

        case LOGOUT:
            return Object.assign({}, state, {
                'user': null,
                isAuth: false
            });

        case AUTH_SUCCESS:
            if (stateParam) 
                return Object.assign({}, state, {
                    'user': {
                        displayName,
                        email,
                        photoURL,
                        refreshToken,
                        uid
                    },
                    isAuth: true
                });
            else {
                return initialState;
            }
        case AUTH_ERROR:
            console.log(action);
            return null;
        
        
        default:
            return state;
    }
}