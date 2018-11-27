import React from 'react';
import { httpGet } from './api/HttpRequests';
import Cookies from 'universal-cookie';
import { Form, Button, Card, Image } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

export class Signup extends React.Component {
  state = { email: '', password: '' };

  handleSignup = e => {
    e.preventDefault();
    this.signUp();
  };

  signUp = (email, password) => {
    httpGet(`sessions`, {
      user: {
        email: email,
        password: password,
        password_confirmation: password,
      },
    })
      .then(response => {
        const cookies = new Cookies();
        cookies.set('email', response.email, { path: '/' });
        cookies.set('authentication_token', response.authentication_token, {
          path: '/',
        });
        this.setState({ isAuth: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div style={signupContainerStyles}>
        <Card style={signupCardStyles}>
          <div>
            <Button
              as={Link}
              floated="left"
              size="mini"
              circular
              icon="arrow left"
              to="/login"
              style={{ position: 'absolute' }}
            />
            <h1 align="center" style={{ marginBottom: '20px' }}>
              Register
            </h1>
          </div>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="example@gmail.com"
                value={email}
                onChange={this.changeEmail}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder=""
                value={password}
                onChange={this.changePassword}
              />
            </Form.Field>
            <Button
              fluid
              type="submit"
              color="primary"
              size="large"
              onClick={this.handleSignup}
            >
              Register
            </Button>
          </Form>
        </Card>
      </div>
    );
  }

  changePassword = e => {
    this.setState({ password: e.target.value });
  };
  changeEmail = e => {
    this.setState({ email: e.target.value });
  };
  handleSignup = e => {
    this.props.history.push('/events');
  };
}

/* ================================ STYLES ================================ */
const signupContainerStyles = {
  width: '100%',
  margin: '0px auto',
  background: '#F7F8FA',
  minHeight: '100vh',
  display: 'grid',
};
const signupCardStyles = {
  textAlign: 'left',
  margin: '20px auto',
  padding: '15px',
  width: '450px',
};
