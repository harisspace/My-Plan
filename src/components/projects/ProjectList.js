import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';
import './ProjectList.css';

function ProjectList({projects}) {
    
        return (
        <div className="projectList">

            {
                projects && projects.map(project => (
                    <Link to={`project/${project.id}`} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                ))
            }

        </div>
    )
}

export default ProjectList
