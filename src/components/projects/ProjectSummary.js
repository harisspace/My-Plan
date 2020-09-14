import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectSummary.css';

function ProjectSummary({project}) {
    return (
        <div className="projectSummary">
            <Link to={`project/${project.id}`} className="projectSummary__link">
                <h4>{project.title}</h4>
                <p>
                    <strong>Posted by Haris Akbar</strong>
                </p>
                <p className="projectSummary__createdAt">Today at 3:26 pm</p>
            </Link>
        </div>
        
    )
}

export default ProjectSummary
