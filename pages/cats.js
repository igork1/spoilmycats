import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import router from 'next/router';
import moment from 'moment-timezone';
import { Formik, Field, Form } from 'formik';
import { getLoggedInUser, getMyCats } from '../services';
import Header from '../components/Header/Header';

const Pets = () => {
  const [cats, setCats] = useState([]);
  const [user, setUser] = useState(false);

  const feed = async id => {
    console.log(`/catsapi/v1/cats/${id}`);
    await axios({
      method: 'PUT',
      url: `/catsapi/v1/cats/${id}`,
      data: {
        feedingTime: new Date(),
      },
    });

    const myCats = await getMyCats();

    setCats(myCats.data);
  };

  const deleteCat = async id => {
    console.log(`/catsapi/v1/cats/${id}`);
    await axios({
      method: 'DELETE',
      url: `/catsapi/v1/cats/${id}`,
    });

    const myCats = await getMyCats();

    setCats(myCats.data);
  };

  useEffect(() => {
    (async () => {
      const usr = await getLoggedInUser();
      setUser(usr);
      if (!usr) router.push('/login');

      const myCats = await getMyCats();

      setCats(myCats.data);
    })();
  }, []);
  return (
    <>
      {user && (
        <>
          <Header user={user.data} />
          <h1>My Cats</h1>
          <ul>
            {cats &&
              cats.map(cat => (
                <li key={cat._id}>
                  {cat.name}{' '}
                  <button
                    onClick={() => {
                      feed(cat._id);
                    }}
                    type="button"
                  >
                    Feed
                  </button>
                  <button
                    onClick={() => {
                      deleteCat(cat._id);
                    }}
                    type="button"
                  >
                    Delete
                  </button>
                  <div className="fed">
                    Last fed: {moment(cat.feedingTime).fromNow()}
                  </div>
                </li>
              ))}
          </ul>
          <h2>Add Cat</h2>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={async values => {
              const { data } = await axios({
                method: 'POST',
                url: '/catsapi/v1/cats',
                data: values,
              });
              const myCats = await getMyCats();

              setCats(myCats.data);
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
                <Field type="name" name="name" placeholder="Name" />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

Pets.propTypes = {};

export default Pets;
