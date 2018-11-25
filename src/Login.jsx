import React from 'react';
import axios from 'axios';
import { httpPost } from './api/HttpRequests';

export class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form>
          <input id="email" placeholder="email" />
          <input id="password" placeholder="password" />
          <button onClick={this.handleSignin}>Log In</button>
        </form>
      </div>
    );
  }

  handleSignin = e => {
    e.preventDefault();
    let that = this;
    
    httpPost(`sessions`, {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      })
      .then(function(response) {
        console.log('YAAAY FUNCIONO!!!');
        that.props.changePage('delete');
        //that.props.updateCurrentUser(email);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
