import { StateModel, ActionModel } from './model';
import * as actionTypes from './actionTypes';

export const reducer = (state: StateModel, action: ActionModel): StateModel => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            let newState = {...state};
            newState.items.push(action.payload);
            return newState;
        default:
            return state;
    }
}
