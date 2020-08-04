import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { CatsListStyles } from './CatsListStyles';

const CatsList = ({ cats, feed }) => (
  <CatsListStyles>
    {cats &&
      cats.map(cat => (
        <li key={cat._id}>
          <h2 className="cat-name">{cat.name}</h2>
          <div className="fed">
            {cat.feedingTime ? (
              <p>
                Last fed: <strong>{moment(cat.feedingTime).fromNow()}</strong>
              </p>
            ) : (
              <p>Not fed yet</p>
            )}
          </div>
          <div className="btn-wrap">
            <button
              onClick={() => {
                feed(cat._id);
              }}
              type="button"
              className="btn btn-block"
            >
              Feed
            </button>
          </div>
        </li>
      ))}
  </CatsListStyles>
);

CatsList.propTypes = {
  cats: PropTypes.array,
  feed: PropTypes.func,
};

export default CatsList;
