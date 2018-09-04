import React from 'react';
import Checkbox from './Checkbox';
const mockProps = {
    id: 'checkbox',
    name: 'checkbox',
    label: 'My Checkbox',
    value: 'on',
    labelClass: 'label-class',
    checked: false,
    className:'checkbox',
    onChange: () => {}
}
describe("Checkbox component", () => {
    it("Render checkbox", ()=>{
        const wrapper = shallow(<Checkbox {...mockProps}/>);
        expect(wrapper.find('.checkbox')).toHaveLength(1);
    });
    it("label class", ()=>{
        const wrapper = shallow(<Checkbox {...mockProps}/>);
        expect(wrapper.find('.label-class')).toHaveLength(1);
    });
});