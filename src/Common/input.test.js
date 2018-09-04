import React from 'react';
import Input from './input';
// import {mount} from 'enzyme';
const mockData = {
    type: 'text',
    name: 'mock',
    id: 'mock',
    value: '',
    placeholder: 'mock',
    label: 'label',
    onClick: () => {
        return jest.fn()
    }
}
describe("input textbox", () => {
    it("test inout render", () => {
        const wrarpper = shallow(<Input {...mockData}/>);
        expect(wrarpper.find('.form-fields')).toHaveLength(1);
    });
    it("Test input type field", () => {
        const wraper = mount(<Input  {...mockData} />);
        wraper.setProps({type: 'text'}); expect(wraper.props().type).toEqual('text');
    })
})
