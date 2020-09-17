const initState = {
    authError: null
};

function authReducer(state = initState, action) {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            return state;
        case 'SIGNUP_SUCCES':
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer