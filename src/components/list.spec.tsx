import * as React from "react";
import * as renderer from "react-test-renderer";
import { List } from './list';
import {shallow} from "enzyme";

describe('Test List Component', () => {
    it('Snapshot Component', () => {
        const list = renderer
            .create(<List />)
            .   toJSON();
        expect(list).toMatchSnapshot();
    });
    it('Functional Component', () => {
        const list = shallow(<List />);
        let inputName = list.find('input[name="name"]');
        let inputAge = list.find('input[name="age"]');
        let button = list.find('button');
        let items = list.find('div#coverList > ul > li');
        expect(inputName.length).toEqual(1);
        expect(inputAge.length).toEqual(1);
        expect(button.length).toEqual(1);
        expect(items.length).toEqual(0);
    });
});
