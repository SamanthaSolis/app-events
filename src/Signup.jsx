import React from 'react';
import { httpPost, httpPut } from './api/HttpRequests';
import Cookies from 'universal-cookie';
import { Form, Button, Card, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Signup extends React.Component {
  state = {
    user: { name: '', email: '', password: '' },
    isStudent: true,
    selectedFile: null,
  };

  render() {
    const { user, isStudent } = this.state;

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
            <Form.Input
              name="name"
              label="Name"
              placeholder=""
              value={user.name}
              onChange={this.changeChangeUser}
            />
            <Form.Input
              name="last_name"
              label="Last Name"
              placeholder=""
              value={user.last_name}
              onChange={this.changeChangeUser}
            />
            <Form.Input
              type="text"
              name="email"
              label="Email"
              placeholder="example@gmail.com"
              value={user.email}
              onChange={this.changeChangeUser}
            />
            <Form.Input
              type="password"
              name="password"
              label="Password"
              placeholder=""
              value={user.password}
              onChange={this.changeChangeUser}
            />
            <Form.Field>
              <label>Foto</label>
              <input type="file" onChange={this.handleselectedFile} />
            </Form.Field>
            <Checkbox
              label="¿Eres un estudiante?"
              checked={isStudent}
              onChange={this.toogleStudent}
            />
            {isStudent && (
              <React.Fragment>
                <Form.Input
                  type="number"
                  name="semester"
                  label="Semestre"
                  placeholder="7"
                  value={user.semester}
                  onChange={this.changeChangeUser}
                />
                <Form.Input
                  type="text"
                  name="degree"
                  label="Carrera"
                  placeholder="ITC"
                  value={user.degree}
                  onChange={this.changeChangeUser}
                />
                <Form.Input
                  type="text"
                  name="student_groups"
                  label="Grupos Estudiantiles"
                  placeholder=""
                  value={user.student_groups}
                  onChange={this.changeChangeUser}
                />
              </React.Fragment>
            )}
            {!isStudent && (
              <Form.Input
                type="text"
                name="department"
                label="Departamento"
                placeholder=""
                value={user.department}
                onChange={this.changeChangeUser}
              />
            )}
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

  toogleStudent = () => {
    this.setState({ isStudent: !this.state.isStudent });
  };

  changeChangeUser = (e, { name, value }) => {
    this.setState({
      user: { ...this.state.user, [name]: value },
    });
  };
  handleSignup = e => {
    const { user } = this.state;
    this.signUp(user);
    this.props.changePage('/events');
  };

  signUp = async user => {
    const newUser = await httpPost(
      `auth/register`,
      { name: user.name, email: user.email, password: user.password },
      false,
    );
    const login = await httpPost(
      `auth/login`,
      { email: user.email, password: user.password },
      false,
    );
    const { selectedFile } = this.state;
    const file = new Blob([selectedFile]);
    const formData = new FormData();
    if (login && newUser) {
      const cookies = new Cookies();
      cookies.set('email', user.email);
      cookies.set('access_token', login.access_token);
      const config = { 'content-type': 'multipart/form-data' };
      if (this.state.isStudent) {
        const newStudent = await httpPost(`students`, {
          ...user,
          password: undefined,
          photo: 'algo',
          department: undefined,
        });
        formData.append('student[photo]', file);
        const resp = await httpPut(
          `students/${newStudent.id}`,
          formData,
          config,
        );
      } else {
        const newEmployee = await httpPost(`employees`, {
          ...user,
          password: undefined,
        });
        formData.append('employee[photo]', file);
        const resp = await httpPut(
          `employees/${newEmployee.id}`,
          formData,
          config,
        );
      }
    }
  };

  handleselectedFile = event => {
    this.setState({ selectedFile: event.target.files[0] });
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
