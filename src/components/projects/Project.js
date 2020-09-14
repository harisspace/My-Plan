import React from 'react';
import './Project.css';
import { connect } from 'react-redux';

function Project({project}) {
    return (
        <div className="project">
            <h3>{project.title}</h3>
            <p>{project.content}</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    let [project] = state.project.projects.filter(project => (
        project.id === id
    ))
    return {
        project
    }
}

export default connect(mapStateToProps)(Project)
