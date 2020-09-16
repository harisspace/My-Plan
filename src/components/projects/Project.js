import React from 'react';
import './Project.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function Project({project}) {
    if (project) {
        return (
            <div className="project">
                <h3>{project.title}</h3>
                <p>{project.content}</p>
            </div>
        )
    }else {
        return (
            <div>
                <h4 className="center">Loading Post...</h4>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null; 
    return {
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [
        { collection: 'projects' }
    ])
)(Project)
