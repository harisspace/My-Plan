import React, { Component } from 'react';
import './CreateProject.css';
import { createProject } from '../../redux/actions/createProject';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state)
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="createProject">
                <h4>Create a New Project</h4>
                <form className="createProject__form" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Project Title</label>
                    <input type="text"  id="title" className="createProject__title" placeholder="the title is..." onChange={this.handleChange} />
                    <label htmlFor="content">Project Content</label>
                    <textarea className="createProject__text" id="content" placeholder="the content is..." onChange={this.handleChange}></textarea>
                    <button className="createProject__button" type="submit">Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
} 

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
