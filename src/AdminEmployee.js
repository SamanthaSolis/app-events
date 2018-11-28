import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
  EditButton,
  TextInput,
  NumberInput,
  LongTextInput,
  SelectInput,
  ReferenceInput,
  DateInput,
  SimpleForm,
  DisabledInput,
  EmailField,
  BooleanField,
  BooleanInput,
} from 'react-admin';

export const EmployeeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="name" />
            <TextField source="last_name" />
            <TextField source="department" />
            <BooleanField source="is_admin" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export const EmployeeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="last_name" />
            <TextInput source="department" />
            <BooleanInput source="is_admin" />
        </SimpleForm>
    </Edit>
);

export const EmployeeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="last_name" />
            <TextInput source="department" />
            <BooleanInput source="is_admin" />
        </SimpleForm>
    </Create>
);