const initState = {
    projects: 
        [
            {id: '1', title: 'hello', content: 'blah blah'},
            {id: '2', title: 'hello', content: 'blah blah'}
        ]
};

function projectReducer(state = initState, action) {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create_project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        default:
            return state;
    }
}

export default projectReducer