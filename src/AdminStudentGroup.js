import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  TextInput,
  LongTextInput,
  SimpleForm,
  DisabledInput,
} from 'react-admin';


export const Student_groupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export const  Student_groupEdit= props => (
  <Edit {...props}>
    <SimpleForm>
        <DisabledInput source="id" />
        <TextInput source="name" />
        <LongTextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const Student_groupCreate = props => (
    <Create {...props}>
      <SimpleForm>
          <DisabledInput source="id" />
          <TextInput source="name" />
          <LongTextInput source="description" />
      </SimpleForm>
    </Create>
  );