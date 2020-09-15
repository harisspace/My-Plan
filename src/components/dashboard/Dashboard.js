import React, { Component } from 'react';
import Notification from './Notification';
import ProjecList from '../projects/ProjectList';
import './Dashboard.css';
import { connect } from 'react-redux';


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <ProjecList projects={this.props.projects} />
                <Notification />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}




export default connect(mapStateToProps)(Dashboard) 

