import React, { Component } from 'react';
import { Grid, Button, Item, Card, Image, Form } from 'semantic-ui-react';
import Student from './models/Student.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import { dummyEvents } from './utils/DummyData.jsx';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  student: Student,
};

class ProfileComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    edit: true,
  };

  /* ================================ RENDER ================================ */
  render() {
    var { student, edit } = this.state;
    if (!student) {
      return <div>LOADING bb</div>;
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
                          src="https://scontent.fmfe1-1.fna.fbcdn.net/v/t1.0-9/303745_3237982208910_1382882341_n.jpg?_nc_cat=109&_nc_ht=scontent.fmfe1-1.fna&oh=9d2d251e78c46d0c84ab737fec602ef0&oe=5C776309"
                          size="small"
                          circular
                        />
                        <Item.Header>
                          {' '}
                          <h2>
                            {student.name} {student.second_name}
                          </h2>
                        </Item.Header>
                      </center>
                      <Form onSubmit={this.saveProfile}>
                        <Form.Input
                          name="mail"
                          label={<label style={labelstyle}>mail: </label>}
                          placeholder=""
                          readOnly={edit}
                          value={student.mail}
                          onChange={this.handleChangeStudent}
                        />

                        <Form.Input
                          name="password"
                          label={<label style={labelstyle}>password: </label>}
                          placeholder=""
                          readOnly={edit}
                          value={student.password}
                          onChange={this.handleChangeStudent}
                        />

                        <Form.Input
                          name="semester"
                          label={<label style={labelstyle}>semestre: </label>}
                          placeholder=""
                          readOnly={edit}
                          value={student.semester}
                          onChange={this.handleChangeStudent}
                        />

                        <Form.Input
                          name="semester"
                          label={<label style={labelstyle}>semestre: </label>}
                          placeholder=""
                          readOnly={edit}
                          value={student.semester}
                          onChange={this.handleChangeStudent}
                        />

                        <Form.Input
                          name="degree"
                          label={<label style={labelstyle}>carrera: </label>}
                          placeholder=""
                          readOnly={edit}
                          value={student.degree}
                          onChange={this.handleChangeStudent}
                        />

                        <Form.Input
                          name="studentGroups"
                          label={
                            <label style={labelstyle}>
                              Grupos Estudiantiles:{' '}
                            </label>
                          }
                          placeholder=""
                          readOnly={edit}
                          value={student.studentGroups}
                          onChange={this.handleChangeStudent}
                        />

                        {!edit ? <Button type="submit">NEPE</Button> : null}
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
    var id = 1;
    var student: Student = (await httpGet(`students/${id}`)) || dummyEvents;
    this.setState({ student });
  }

  changeEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  saveProfile = () => {
    console.log(this.state.student);
  };

  handleChangeStudent = (e, { name, value }) => {
    this.setState({ student: { ...this.state.student, [name]: value } });
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
