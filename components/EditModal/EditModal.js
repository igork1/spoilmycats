import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { EditModalStyles } from './EditModalStyles';
import Input from '../Input/Input';

const EditModal = ({ cat, close, deleteCat }) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');

    return () => {
      body.classList.remove('modal-open');
    };
  }, []);

  const deleteThisCat = () => {
    deleteCat(cat);
    close();
  };

  return (
    <EditModalStyles>
      <div className="modal">
        <header className="modal-header">
          <h3 className="modal-title">
            Are you sure you want to delete {cat.name}?
          </h3>
          <button className="close" type="button" onClick={close}>
            <ReactSVG src="/icons/close.svg" />
          </button>
        </header>
        <main className="modal-body">
          <button
            className="btn btn-danger"
            type="button"
            onClick={deleteThisCat}
          >
            Delete {cat.name}
          </button>
          <button className="btn" type="button" onClick={close}>
            No, go back
          </button>
        </main>
      </div>
    </EditModalStyles>
  );
};

EditModal.propTypes = {
  cat: PropTypes.object,
  close: PropTypes.func,
  deleteCat: PropTypes.func,
};

export default EditModal;
