import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  DateField,
  EditButton,
  SimpleForm,
  DisabledInput,

} from 'react-admin';


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        <EditButton />
        </Datagrid>
    </List>
);
