export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: 'Haris',
                authorLastName: 'Akbar',
                createdAt: '2am'
            })
            .then(() => {
                dispatch({
                    type: 'ADD_PROJECT',
                    project
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ADD_PROJECT_ERROR',
                    err
                })
            })
    }
}