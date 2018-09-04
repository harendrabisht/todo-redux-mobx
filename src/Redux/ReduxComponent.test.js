import React from 'react';
import ReduxComponent  from './ReduxComponent';
import {shallow} from 'enzyme';
describe('Redux Component test', ()=>{
    it('test todocontainer render', ()=>{
        const wrapper = shallow(<ReduxComponent/>);
        expect(wrapper.find('Provider')).toHaveLength(1)
    });
});