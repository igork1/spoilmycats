import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { AddCatStyles } from './AddCatStyles';
import Input from '../Input/Input';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string(),
});

const AddCat = ({ addCat }) => {
  const [isAddingCat, setIsAddingCat] = useState(false);
  return (
    <AddCatStyles>
      <div className="container">
        <div className="wrap">
          {isAddingCat ? (
            <>
              <div className="add-cat">
                <Formik
                  initialValues={{
                    name: '',
                    skills: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async values => {
                    values.skills = values.skills
                      .split(',')
                      .map(skill => skill.trim());
                    addCat(values);
                    setIsAddingCat(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Input type="text" name="name" label="Name" />
                      <Input
                        type="text"
                        name="skills"
                        label="Skills (comma separated)"
                      />
                      <button type="submit" className="btn btn-block">
                        Add Cat
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </>
          ) : (
            <button
              className="btn btn-block"
              type="button"
              onClick={() => {
                setIsAddingCat(true);
              }}
            >
              Track New Cat
            </button>
          )}
        </div>
      </div>
    </AddCatStyles>
  );
};

AddCat.propTypes = {
  addCat: PropTypes.func,
};

export default AddCat;
