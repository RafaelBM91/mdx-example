import * as  React from 'react';
import { ContextModel } from './model';

const initial: ContextModel = {
    dispatch: () => null,
    state: {
        items: []
    }
}

export const ListContext = React.createContext<ContextModel>(initial);
