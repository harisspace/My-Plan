import React from 'react';
import ProjectSummary from './ProjectSummary';
import './ProjectList.css';

function ProjectList({projects}) {
    
    return (
        <div className="projectList">

            {
                projects && projects.map(project => (
                    <ProjectSummary key={project.id} project={project} />
                ))
            }

        </div>
    )
}

export default ProjectList
