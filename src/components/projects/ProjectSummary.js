import React from 'react';
import './ProjectSummary.css';
import moment from 'moment';

function ProjectSummary({project}) {
    return (
        <div className="projectSummary">
            <h4>{project.title}</h4>
            <p>
                <strong>Posted by {project.authorFirstName} {project.authorLastName}</strong>
            </p>
            <p className="projectSummary__createdAt">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
        
    )
}

export default ProjectSummary
