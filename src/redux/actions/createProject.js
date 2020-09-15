import { db } from '../../config/fbConfig';
import firebase from 'firebase/app';

export const createProject = (project) => {
    return (dispatch, getState) => {
        db.collection('projects').add({
            ...project,
            authorFirstName: 'Haris',
            authorLastName: 'Akbar',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
            .then(() => dispatch({
                type: 'CREATE_PROJECT',
                project
            }))
            .catch(error => dispatch({
                type: 'CREATE_PROJECT_ERROR',
                error
            }))
    }
}