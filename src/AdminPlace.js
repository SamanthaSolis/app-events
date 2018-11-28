import React from 'react';
import { List, Create, Edit, Datagrid, TextField, EmailField, DateField,ReferenceField,NumberField,EditButton, TextInput, NumberInput, LongTextInput, SelectInput,ReferenceInput,DateInput,SimpleForm,DisabledInput } from 'react-admin';

export const PlaceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="building" />
            <NumberField source="floor" />
            <NumberField source="classroom" />
            <NumberField source="max_capacity" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton /> 
        </Datagrid>
    </List>
);

export const PlaceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="building" />
            <NumberInput source="floor" />
            <NumberInput source="classroom" />
            <NumberInput source="max_capacity" />

        </SimpleForm>
    </Edit>
);

export const PlaceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="building" />
            <NumberInput source="floor" />
            <NumberInput source="classroom" />
            <NumberInput source="max_capacity" />

        </SimpleForm>
    </Create>
);
