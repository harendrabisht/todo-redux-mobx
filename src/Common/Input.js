import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './form.css';
class Input extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let {
            type,
            name,
            id,
            value,
            placeholder,
            onChange
        } = this.props;

        return (
            <div className={classnames('form-fields')}>
                {/* <label className={classnames('label-class')}>{label}</label> */}
                
                <input
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
            </div>
        )
    }
}
Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    wrapperProps: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string
};
Input.defaultProps = {
    type: 'text',
    name: null,
    id: null,
    value: '',
    placeholder: null
}
export default Input;