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
  BooleanField,
  BooleanInput,
} from 'react-admin';

export const ReservationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <BooleanField source="approval" />
            <ReferenceField source="employee_id" reference="employees"><TextField source="email" /></ReferenceField>
            <ReferenceField source="event_id" reference="events"><TextField source="name" /></ReferenceField>
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ReservationEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <BooleanInput source="approval" />
            <ReferenceInput source="employee_id" reference="employees">
                <SelectInput optionText="email"/>
            </ ReferenceInput>
            <ReferenceInput source="event_id" reference="events">
                <SelectInput optionText="name"/>
            </ ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ReservationCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <BooleanInput source="approval" />
            <ReferenceInput source="employee_id" reference="employees"><SelectInput optionText="email"/></ReferenceInput>
            <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name"/></ReferenceInput>
        </SimpleForm>
    </Create>
);
