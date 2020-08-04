import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { InputStyles } from './InputStyles';

const Input = props => {
  console.log(props);
  const { type, name, label } = props;
  return (
    <InputStyles>
      <Field
        className="field-control"
        type={type}
        name={name}
        placeholder={label}
      />
    </InputStyles>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
