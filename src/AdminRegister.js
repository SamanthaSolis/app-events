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
} from 'react-admin';


export const RegisterList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="time" />
            <ReferenceField source="student_id" reference="students"><TextField source="email" /></ReferenceField>
            <ReferenceField source="event_id" reference="events"><TextField source="name" /></ReferenceField>
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export const RegisterEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DateInput source="time" />
            <ReferenceInput source="student_id" reference="students"><SelectInput optionText="email"/></ReferenceInput>
            <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name"/></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const RegisterCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DateInput source="time" />
            <ReferenceInput source="student_id" reference="students"><SelectInput optionText="email"/></ReferenceInput>
            <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name"/></ReferenceInput>
        </SimpleForm>
    </Create>
);
