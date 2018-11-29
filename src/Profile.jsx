import React, { Component } from 'react';
import { Grid, Button, Item, Card, Image, Form } from 'semantic-ui-react';
import Student from './models/Student.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import { dummyEvents } from './utils/DummyData.jsx';
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
  };

  /* ================================ RENDER ================================ */
  render() {
    var { student, edit } = this.state;
    
    if (!student) {
      return <div>LOADING</div>;
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
                          src="https://womenaccelerators.org/wp-content/uploads/2018/03/default-profile.png"
                          size="small"
                          circular
                        />
                        </center>

                        <Item.Header>
                        <center>
                          <h1>
                            {student.name} {student.last_name}
                          </h1>
                          </center>
                        </Item.Header>

                      <Form onSubmit={this.saveProfile}>
                        <Form.Input
                          name="name"
                          label={<label style={labelstyle}>Nombre: </label>}
                          placeholder=""
                          readOnly={edit}
                          value={student.name}
                          onChange={this.handleChangeStudent}
                        />

                      <Form.Input
                          name="last_name"
                          label={<label style={labelstyle}>Apellido: </label>}
                          placeholder=""
                          readOnly={edit}
                          value={student.last_name}
                          onChange={this.handleChangeStudent}
                        />


                        <Form.Input
                          name="email"
                          label={<label style={labelstyle}>mail: </label>}
                          placeholder=""
                          readOnly="true"
                          value={student.email}
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
                          name="student_groups"
                          label={
                            <label style={labelstyle}>
                              Grupos Estudiantiles:{' '}
                            </label>
                          }
                          placeholder=""
                          readOnly={edit}
                          value={student.student_groups}
                          onChange={this.handleChangeStudent}
                        />

                        {!edit ? <Button type="submit">SUBMIT</Button> : null}
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
    var registers = (await httpGet(`registers`)) || [];
    const cookies = new Cookies();
    const email = cookies.get('email');
    var students = await httpGet(`students`, { email: email });
    //this.setState({ student[0].id });

    this.setState({ student: students[0] });
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
