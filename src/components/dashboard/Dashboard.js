import React, { Component } from 'react';
import Notification from './Notification';
import ProjecList from '../projects/ProjectList';
import './Dashboard.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {    
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

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
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect(() => [
        { collection: 'projects' }
    ]),
    connect(mapStateToProps)
    )(Dashboard) 

