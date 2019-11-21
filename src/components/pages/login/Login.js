import React, { Component } from 'react';
import { Consumer } from '../../../context';
import { Link } from 'react-router-dom'
import InputGroup from '../../layout/inputgroup/InputGroup.js';
import '../../layout/inputgroup/InputGroup.css'
import './Login.css';

export default class Login extends Component {
  state = {
    user_name: '',
    user_password: ''
  }
  onSubmit = (dispatch, e) => {
    const { user_name, user_password } = this.state;
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: {
        user_name,
        user_password
      }
    })

  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { user_name, user_password } = this.state;
          return (
            <div>
              <div className="py-3 login-title text-center bg-primary text-light">
                <h2>Simm-Flow</h2>
                <h5 className="pb-3">Work Management System</h5>
                <small>The login isn't functional</small>
              </div>
              <div className="shadow rounded card mb-3 py-3 px-3 login-container">
                <h5>Login</h5>
                <form className="login-form" onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputGroup
                    label="User Name"
                    type="text"
                    name="user_name"
                    placeholder="Enter User Name..."
                    value={user_name}
                    onChange={this.onChange}
                  />
                  <InputGroup
                    label="Password"
                    type="password"
                    name="user_password"
                    placeholder="Enter Password"
                    value={user_password}
                    onChange={this.onChange}
                  />
                  <div className="btn-div text-center">
                    <Link to="/businesses" className="btn btn-primary">LOGIN</Link>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    )
  }
}
