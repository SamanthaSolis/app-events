import React from 'react';
import {
  List,
  Create,
  Edit,
  Filter,
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


const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="Event" source="name" reference="name" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);



export const EventList = props => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="time" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <ReferenceField source="place_id" reference="places">
        <TextField source="building" />
      </ReferenceField>
      <TextField source="poster.url" />
      <TextField source="tags" />
      <NumberField source="max_capacity" />
      <NumberField source="price" />
      <TextField source="contact" />
      <TextField source="areas" />

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
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="mail" />
      </ReferenceInput>
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
  </Edit>
);

export const EventCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <DateInput source="time" />
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="mail" />
      </ReferenceInput>
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
