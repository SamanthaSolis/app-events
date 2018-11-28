import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  EditButton,
  SimpleForm,
  DisabledInput,
} from 'react-admin';

export const StudentList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="name" />
      <TextField source="last_name" />
      <TextField source="semester" />
      <TextField source="degree" />
      <TextField source="photo.url" />
      <TextField source="student_groups" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <EditButton />
    </Datagrid>
  </List>
);


export const StudentEdit = props => (
  <Edit {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <EmailField source="email" />
          <TextField source="name" />
          <TextField source="last_name" />
          <TextField source="semester" />
          <TextField source="degree" />
          <TextField source="photo.url" />
          <TextField source="student_groups" />
          <DateField source="created_at" />
          <DateField source="updated_at" />
      </Datagrid>
  </Edit>
);

export const StudentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <EmailField source="email" />
      <TextField source="name" />
      <TextField source="last_name" />
      <DateField source="semester" />
      <TextField source="degree" />
      <TextField source="photo.url" />
      <TextField source="student_groups" />
    </SimpleForm>
  </Create>
);
