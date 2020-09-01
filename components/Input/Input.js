/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { InputStyles } from './InputStyles';

const Input = props => {
  const { type, name, label } = props;
  return (
    <InputStyles>
      <label htmlFor={name}>
        <span className="sr-only">{label}</span>
        <Field name={name}>
          {({ field, form, meta }) => {
            const hasError = form.submitCount > 0 && meta.touched && meta.error;
            return (
              <>
                <input
                  className={[
                    'field-control',
                    hasError ? 'has-error' : null,
                  ].join(' ')}
                  type={type}
                  id={name}
                  placeholder={label}
                  {...field}
                />
                {hasError && <div className="error">{meta.error}</div>}
              </>
            );
          }}
        </Field>
      </label>
    </InputStyles>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
