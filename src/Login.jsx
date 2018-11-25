import React from 'react';
import axios from 'axios';
import { httpPost } from './api/HttpRequests';
import { handleChange } from './utils/StateUtil';


export class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Log In</h2>
        <form>
          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange(this)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange(this)}
          />
          <button onClick={this.handleSignin}>
            Log In
          </button>
        </form>
      </div>
    );
  }

  handleSignin = e => {
    e.preventDefault();
    const { email, password } = this.state;

    httpPost(`sessions`, {
      email: email,
      password: password,
    })
      .then((response) => {
        this.props.changePage('delete');
        this.props.updateCurrentUser(email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
