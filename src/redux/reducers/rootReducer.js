import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer

