import React, { Component } from 'react';
import { Grid, Button, Item, Card, Image, Form } from 'semantic-ui-react';
import Student from './models/Student.jsx';
import { httpGet, httpPut } from './api/HttpRequests.jsx';
import Cookies from 'universal-cookie';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  student: Student,
};

class ProfileComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    edit: true,
    isStudent: true,
  };

  /* ================================ RENDER ================================ */
  render() {
    var { user, edit, isStudent } = this.state;
    if (!user) {
      return <div />;
    } else {
      return (
        <div style={eventsContainerStyles}>
          <Grid divided="vertically">
            <Grid.Row columns={1}>
              <Card style={{ width: '90%', margin: '10px' }}>
                <Card.Content>
                  <Button
                    labelPosition="left"
                    icon="edit outline"
                    content="Editar"
                    style={{ float: 'right' }}
                    onClick={this.changeEdit}
                  />
                  <Item>
                    <Item.Content>
                      <center>
                        <Image
                          src={user.photo.url || ''}
                          size="tiny"
                          circular
                        />
                        <Item.Header>
                          {' '}
                          <h2>
                            {user.name} {user.last_name}
                          </h2>
                        </Item.Header>
                      </center>
                      <Form onSubmit={this.saveProfile}>
                        {isStudent && (
                          <React.Fragment>
                            <Form.Input
                              name="email"
                              label={<label style={labelstyle}>Email: </label>}
                              placeholder=""
                              readOnly={edit}
                              value={user.email}
                              onChange={this.handleChangeStudent}
                            />
                            <Form.Input
                              name="semester"
                              label={
                                <label style={labelstyle}>Semestre: </label>
                              }
                              placeholder=""
                              readOnly={edit}
                              value={user.semester}
                              onChange={this.handleChangeStudent}
                            />
                            <Form.Input
                              name="degree"
                              label={
                                <label style={labelstyle}>carrera: </label>
                              }
                              placeholder=""
                              readOnly={edit}
                              value={user.degree}
                              onChange={this.handleChangeStudent}
                            />
                            <Form.Input
                              name="student_groups"
                              label={
                                <label style={labelstyle}>
                                  Grupos Estudiantiles:
                                </label>
                              }
                              placeholder=""
                              readOnly={edit}
                              value={user.student_groups}
                              onChange={this.handleChangeStudent}
                            />
                          </React.Fragment>
                        )}
                        {!isStudent && (
                          <Form.Input
                            name="department"
                            label={
                              <label style={labelstyle}>Departamento:</label>
                            }
                            placeholder=""
                            readOnly={edit}
                            value={user.department}
                            onChange={this.handleChangeStudent}
                          />
                        )}
                        {!edit ? <Button type="submit">Cambiar</Button> : null}
                      </Form>
                    </Item.Content>
                  </Item>
                </Card.Content>
              </Card>
            </Grid.Row>
          </Grid>
        </div>
      );
    }
  }

  /* ================================ LOGIC ================================ */
  async componentDidMount() {
    await this.getStudent();
  }

  async getStudent() {
    const cookies = new Cookies();
    const email = cookies.get('email');
    const students = await httpGet(`students`);
    const student = students.find(x => x.email === email);
    if (student) {
      this.setState({ user: student, isStudent: true });
    } else {
      const email = cookies.get('email');
      const employees = await httpGet(`employees`);
      const employee = employees.find(x => x.email === email);
      this.setState({ user: employee, isStudent: false });
    }
  }

  changeEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  saveProfile = async () => {
    if (this.state.isStudent) {
      var updatedStudent = await httpPut(
        `students/${this.state.user.id}`,
        this.state.user,
      );
      this.setState({ edit: false });
    } else {
      var updatedEmployee = await httpPut(
        `employees/${this.state.user.id}`,
        this.state.user,
      );
      this.setState({ edit: false });
    }
  };

  handleChangeStudent = (e, { name, value }) => {
    this.setState({ user: { ...this.state.user, [name]: value } });
  };
}

/* ================================ STYLES ================================ */
var eventsContainerStyles = {
  width: '70%',
  margin: '0px auto',
  background: '#F7F8FA',
  minHeight: 'calc(100% - 65px)',
};

var labelstyle = {
  fontWeight: 'bold',
  fontSize: '15px',
  color: '#00A9A5',
};

export default ProfileComponent;
