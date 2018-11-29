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
  ImageField,
  ImageInput,
} from 'react-admin';



export const EventList = props => (
  <List {...props}>
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
      <ImageField source="poster.url" title="poster" />
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
        <SelectInput optionText="email" />
      </ReferenceInput>
      <ReferenceInput source="place_id" reference="places">
        <SelectInput optionText="building" />
      </ReferenceInput>
      <LongTextInput source="description" />
      <ImageInput source="poster"  src="url" label="Poster" accept="image/*">
      <ImageField source="poster.url" title="poster" />
      </ImageInput>
      <TextInput source="tags" />
      <NumberInput source="max_capacity" />
      <NumberInput source="price" />
      <TextInput source="contact" />
      <SelectInput label="Areas" source="areas" choices={[
  { id: 'Tecnologia', name: 'tecnologia' },
  { id: 'Quimica', name: 'quimica' },
  { id: 'Ingenieria', name: 'ingenieria' },
  { id: 'Entretenimiento', name: 'entretenimiento' },
  { id: 'Psicología', name: 'psicología' },
  { id: 'Humanidades', name: 'humanidades' },
  { id: 'Comunicación', name: 'comunicación' },
  { id: 'Peliculas', name: 'peliculas' },
]} />
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
      <SelectInput label="Areas" source="areas" choices={[
  { id: 'Tecnologia', name: 'tecnologia' },
  { id: 'Quimica', name: 'quimica' },
  { id: 'Ingenieria', name: 'ingenieria' },
  { id: 'Entretenimiento', name: 'entretenimiento' },
  { id: 'Psicología', name: 'psicología' },
  { id: 'Humanidades', name: 'humanidades' },
  { id: 'Comunicación', name: 'comunicación' },
  { id: 'Peliculas', name: 'peliculas' },
]} />
    </SimpleForm>
  </Create>
);
