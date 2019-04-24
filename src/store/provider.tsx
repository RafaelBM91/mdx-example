import * as  React from 'react';
import { ListContext } from './context';
import { reducer } from './reducer';
import * as propTypes from 'prop-types';

export const ProviderList: React.FunctionComponent<{}> = ({
    children
}) => {
    const [state, dispatch] = React.useReducer(reducer, { items: [] });

    return (
        <ListContext.Provider value={{state, dispatch}} >
            {children}
        </ListContext.Provider>
    );
};

ProviderList.propTypes = {
    children: propTypes.any
};
