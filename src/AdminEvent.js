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

export const EventList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="time" />
      <ReferenceField source="place_id" reference="places">
        <TextField source="building" />
      </ReferenceField>
      <TextField source="description" />
      <TextField source="poster.url" />
      <TextField source="tags" />
      <NumberField source="max_capacity" />
      <NumberField source="price" />
      <TextField source="contact" />
      <TextField source="areas" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <DateInput source="time" />
      <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="building" />
      </ReferenceInput>
      <LongTextInput source="description" />
      <TextInput source="poster.url" />
      <TextInput source="tags" />
      <NumberInput source="max_capacity" />
      <NumberInput source="price" />
      <TextInput source="contact" />
      <TextInput source="areas" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      <NumberInput source="place.id" />
    </SimpleForm>
  </Edit>
);

export const EventCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <DateInput source="time" />
      <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="building" />
      </ReferenceInput>
      <LongTextInput source="description" />
      <TextInput source="poster.url" />
      <TextInput source="tags" />
      <NumberInput source="max_capacity" />
      <NumberInput source="price" />
      <TextInput source="contact" />
      <TextInput source="areas" />
    </SimpleForm>
  </Create>
);
