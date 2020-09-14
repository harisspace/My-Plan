const initState = {
    projects: [
        {id: '1', title: 'help me', content: 'blah blah blah'},
        {id: '2', title: 'help me', content: 'blah blah blah'},
        {id: '3', title: 'help me', content: 'blah blah blah'}
    ]
};

function projectReducer(state = initState, action) {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create_project', action.project);
        default:
            return state;
    }
}

export default projectReducer