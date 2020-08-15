import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import router from 'next/router';
import moment from 'moment-timezone';
import { Formik, Field, Form } from 'formik';
import { getLoggedInUser, getMyCats } from '../services';
import Header from '../components/Header/Header';
import { CatsMainStyles } from '../components/CatsMain/CatsMainStyles';
import { PageWrap } from '../styles/PageWrap';
import CatsList from '../components/CatsList/CatsList';
import AddCat from '../components/AddCat/AddCat';

const Pets = () => {
  const [cats, setCats] = useState([]);
  const [user, setUser] = useState(false);

  const addCat = async values => {
    await axios({
      method: 'POST',
      url: `/catsapi/v1/cats`,
      data: values,
    });

    const myCats = await getMyCats();
    setCats(myCats.data);
  };

  const feed = async id => {
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

  useEffect(() => {
    (async () => {
      const usr = await getLoggedInUser();
      setUser(usr.data);
      if (!usr) router.push('/login');
      const myCats = await getMyCats();
      setCats(myCats.data);
    })();

    const interval = setInterval(async () => {
      const myCats = await getMyCats();
      setCats(myCats.data);
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {user && (
        <>
          <PageWrap>
            <Header user={user} />
            <CatsMainStyles>
              <div className="container">
                {cats.length > 0 ? (
                  <h1 className="title">{user.name}’s Cats</h1>
                ) : (
                  <>
                    <h1 className="title">Track Your First Cat 🐱</h1>
                    <img
                      className="first-cat"
                      src="/illustrations/human-and-cat-chilling.svg"
                      alt="Human and a Cat Chilling"
                    />
                  </>
                )}
                <CatsList cats={cats} feed={feed} />
              </div>
            </CatsMainStyles>

            <AddCat addCat={addCat} />
          </PageWrap>
        </>
      )}
    </>
  );
};

Pets.propTypes = {};

export default Pets;
