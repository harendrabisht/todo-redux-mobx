import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
describe("App Component", ()=>{
  it('renders app crashing', () => {
    const wrapper  = shallow(<App/>);
    expect(wrapper.find('.App')).toHaveLength(1);
  });
});