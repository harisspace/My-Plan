import React, { Component } from 'react';
import Notification from './Notification';
import ProjecList from '../projects/ProjectList';
import './Dashboard.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    firestoreConnect(() => [
        { collection: 'projects' }
    ]),
    connect(mapStateToProps)
    )(Dashboard) 

