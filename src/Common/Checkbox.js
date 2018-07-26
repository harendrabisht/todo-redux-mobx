import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Checkbox extends Component {
    render() {
        const {
            label,
            name,
            id,
            value,
            checked,
            onChange,
            labelClass,
            className
        } = this.props;
        return (
            <div className={className}>
                <input type="checkbox" id={id} name={name} value={value} onChange={onChange} checked={checked}/>
                <label htmlFor={id} className={labelClass}>{label}</label>
            </div>
        )
    }
}

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    labelClass: PropTypes.string
}
Checkbox.defaultProps = {
    id: null,
    name: null,
    label: '',
    value: '',
    labelClass: '',
    checked: false,
    onChange: () => {}
}