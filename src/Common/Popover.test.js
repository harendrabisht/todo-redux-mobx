import React from 'react';
import Popover from './Popover';

describe("Popover Unit Test", () => {
    const wrapper = shallow(<Popover/>);
    it("Test render component", () => {
        expect(wrapper.find('.popover-container')).toHaveLength(1);
    });

    test("validate openPopup", () => {
        let prevState = wrapper
            .state()
            .isOpen;
        wrapper
            .find('.dot-link')
            .simulate('click');

        expect(wrapper.state().isOpen).toBe(!prevState);
    });

    test("ComponentDidMount", () => {
        document.write("<div class='popup active'></div>");
        document.querySelector('body').click();
        expect(document.querySelector('.popup').classList.contains('active')).toBe(false);
    });
});