import React, { Component } from 'react';
import { Grid, Input, Item, Card, Image,Form } from 'semantic-ui-react';
import Student from './models/Student.jsx';
import { httpGet } from './api/HttpRequests.jsx';
import { dummyEvents } from './utils/DummyData.jsx';

/* ================================ CONFIGURATION ================================ */
type Props = {

};
type State = {
  student: Student,
};

class ProfileComponent extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
  };

  /* ================================ RENDER ================================ */
  render() {
    var {student} = this.state;
    if (!student){
      return (
        <div>LOADING bb</div>
      );
    }else{
    return (
      <div style={eventsContainerStyles}>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
          <Card style={{width:"90%", margin:"10px"}}>
            <Card.Content>
              <Item>
                <Item.Content>
                
                <Image src='https://scontent.fmfe1-1.fna.fbcdn.net/v/t1.0-9/303745_3237982208910_1382882341_n.jpg?_nc_cat=109&_nc_ht=scontent.fmfe1-1.fna&oh=9d2d251e78c46d0c84ab737fec602ef0&oe=5C776309' size='small' circular />
                <Item.Header> <h2>{student.name}ahhh {student.second_name}</h2></Item.Header> 

                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Field inline>
                        <label style= {labelstyle}>mail: </label> 
                        <Input placeholder={student.mail} />
                      </Form.Field>

                      <Form.Field inline>
                        <label style= {labelstyle}>password: </label> 
                        <Input placeholder={student.password} />
                      </Form.Field>
                    </Form.Group>

                       <Form.Field>
                        <label style= {labelstyle}>semestre: </label> 
                        <Input placeholder={student.semester} />
                      </Form.Field>

                      <Form.Field >
                        <label style= {labelstyle}>carrera: </label> 
                        <Input placeholder={student.degree} />
                      </Form.Field>

                      <Form.Field >
                        <label style= {labelstyle}>Grupos Estudiantiles: </label> 
                        <Input placeholder={student.name} />
                      </Form.Field>

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
    var id=1;
    var student: Student = (await httpGet(`students/${id}`)) || dummyEvents;
    this.setState({ student });
  }
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
