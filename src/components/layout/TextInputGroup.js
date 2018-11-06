import React, {} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const TextInputGroup = ({
    label,
    name,
    error,
    value,
    placeholder,
    type,
    onChange
}) => {
    return (
        <div className = {classnames('form-group')}>
            <label htmlFor={name}>{label}</label>
            <input
                type = {type}
                name={name}
                placeholder = {placeholder}
                className={classnames('form-control form-control-lg',{'is-invalid':error})}
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextInputGroup.propTypes = {
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
    type:"text"
    // require:"This field is required"
}

