import React from 'react';
import { httpPost } from './api/HttpRequests';
import Cookies from 'universal-cookie';
import { Form, Button, Card, Image, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isAuth: undefined,
  };

  render() {
    const { email, password, isAuth } = this.state;
    if (isAuth === true) {
      this.props.history.push('/events');
    }

    return (
      <div style={loginContainerStyles}>
        <div style={loginContentStyles}>
          <Image src="./logo.jpg" height="80" style={{ margin: '10px auto' }} />
          <Card style={loginCardStyles}>
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
              <div align="center">
                <Button
                  fluid
                  type="submit"
                  className="primary"
                  size="large"
                  onClick={this.handleSignin}
                >
                  Log In
                </Button>
              </div>
            </Form>
            <Divider horizontal>Or</Divider>
            <Button
              as={Link}
              fluid
              className="secondary"
              size="large"
              to="/signup"
            >
              Sign Up
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  changePassword = e => {
    this.setState({ password: e.target.value });
  };
  changeEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleSignin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.logIn(email, password);
  };

  logIn(email, password) {
    httpPost(
      `auth/login`,
      {
        email: email,
        password: password,
      },
      false,
    )
      .then(response => {
        const cookies = new Cookies();
        cookies.set('email', email);
        cookies.set('access_token', response.access_token);
        this.setState({ isAuth: true });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

/* ================================ STYLES ================================ */
const loginContainerStyles = {
  width: '100%',
  margin: 'auto',
  background: '#F7F8FA',
  minHeight: '100vh',
  display: 'grid',
};
const loginContentStyles = {
  margin: 'auto',
  width: '450px',
};
const loginCardStyles = {
  width: '100%',
  textAlign: 'left',
  padding: '15px',
};
