export interface ItemModel {
    name: string;
    age: number;
}

export interface StateModel {
    items: ItemModel[];
}

export interface ActionModel {
    type: string;
    payload: ItemModel;
}

export interface ContextModel {
    state: StateModel;
    dispatch({}: ActionModel): void;
}
