export const signIn = (credential) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credential.email,
            credential.password
        )
        .then(() => {
            dispatch({
                type: 'LOGIN_SUCCESS'
            })
        })
        .catch(err => {
            dispatch({
                type: 'LOGIN_ERROR',
                err: err
            })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => {
                dispatch({
                    type: 'SIGNOUT_SUCCESS'
                })
            })
            
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
            .then(res => {
                return firestore.collection('users').doc(res.user.uid).set({
                    firtName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                })
            })
            .then(() => {
                dispatch({
                    type: 'SIGNUP_SUCCESS'
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SIGNUP_ERROR',
                    err
                })
            })
    }
}