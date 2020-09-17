import React from 'react';
import './ProjectSummary.css';

function ProjectSummary({project}) {
    return (
        <div className="projectSummary">
            <h4>{project.title}</h4>
            <p>
                <strong>Posted by Haris Akbar</strong>
            </p>
            <p className="projectSummary__createdAt">Today at 3:26 pm</p>
        </div>
        
    )
}

export default ProjectSummary
