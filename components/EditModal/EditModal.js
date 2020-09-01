import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { EditModalStyles } from './EditModalStyles';
import { getMyCats } from '../../services';
import Input from '../Input/Input';

const EditModal = ({ cat, close }) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');

    return () => {
      body.classList.remove('modal-open');
    };
  }, []);

  const deleteCat = async () => {
    await axios({
      method: 'DELETE',
      url: `/catsapi/v1/cats/${cat._id}`,
    });
  };

  return (
    <EditModalStyles>
      <div className="modal">
        <header className="modal-header">
          <h3 className="modal-title">Edit {cat.name}</h3>
          <button className="close" type="button" onClick={close}>
            <ReactSVG src="/icons/close.svg" />
          </button>
        </header>
        <main className="modal-body">
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={async values => {}}
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
                <button type="submit" className="btn btn-block">
                  Add Cat
                </button>
              </Form>
            )}
          </Formik>
        </main>
        <footer className="modal-footer">
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={deleteCat}
          >
            Delete {cat.name}
          </button>
        </footer>
      </div>
    </EditModalStyles>
  );
};

EditModal.propTypes = {
  cat: PropTypes.object,
  close: PropTypes.func,
};

export default EditModal;
