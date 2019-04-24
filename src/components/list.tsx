import * as  React from 'react';
import styled from 'styled-components';
import { ListContext } from '@app/store/context';
import * as actionTypes from '@app/store/actionTypes';

interface ItemModel {
    name: string;
    age: number;
}

const Field = styled.label`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 10px 0 0 0;
`;

export const List: React.FunctionComponent<{}> = () => {
    const { dispatch, state: { items } } = React.useContext(ListContext);
    let name: HTMLInputElement | null = null;
    let age: HTMLInputElement | null = null;

    const AddItem = () => {
        if (name && age) {
            if (name.value.length && age.value.length) {
                dispatch ({
                    type: actionTypes.ADD_ITEM,
                    payload: { name: name.value, age: parseInt(age.value) }
                });
                name.value = '';
                age.value = '';
            }
        }
    };

    return (
        <div>
            <div id="coverList">
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>
                                <b>{item.name}</b>:&nbsp;
                                {item.age}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <Field>
                    Name:
                    <input type="text" name="name" ref={(ref) => name = ref} />
                </Field>
                <Field>
                    Age:
                    <input type="number" name="age" ref={(ref) => age = ref} />
                </Field>
                <Field>
                    <button onClick={AddItem}>Add Item</button>
                </Field>
            </div>
        </div>
    );
};
