import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { CatsListStyles } from './CatsListStyles';
import EditModal from '../EditModal/EditModal';

const CatsList = ({ cats, feed }) => {
  const [editCat, setEditCat] = useState(false);

  const edit = cat => {
    setEditCat(cat);
  };

  const closeModal = () => {
    setEditCat(false);
  };

  return (
    <>
      <CatsListStyles className="modal-blur">
        {cats.map(cat => {
          const timeSinceFeeding = moment(new Date()).diff(
            moment(cat.feedingTime),
            'hours',
            true
          );

          let status = {
            level: 'happy',
            label: 'happy',
          };

          if (timeSinceFeeding > 6) {
            status = {
              level: 'hungry',
              label: 'hungry',
            };
          }

          if (timeSinceFeeding > 12) {
            status = {
              level: 'very-hungry',
              label: 'very hungry',
            };
          }

          if (timeSinceFeeding > 24) {
            status = {
              level: 'starving',
              label: 'starving',
            };
          }

          return (
            <li className="cat" key={cat._id}>
              <header className="card-header">
                <h2 className="cat-name">{cat.name}</h2>
                <div>
                  <div className={`status ${status.level}`}>{status.label}</div>
                </div>
              </header>
              <div className="fed">
                {cat.feedingTime ? (
                  <p>
                    Last fed{' '}
                    <strong>{moment(cat.feedingTime).fromNow()}</strong>
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
                  className="btn btn-secondary btn-sm"
                >
                  Feed
                </button>
                <div className="edit-wrap">
                  <button
                    className="btn-plain"
                    type="button"
                    onClick={() => {
                      edit(cat);
                    }}
                  >
                    edit
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </CatsListStyles>
      {editCat && <EditModal cat={editCat} close={closeModal} />}
    </>
  );
};

CatsList.propTypes = {
  cats: PropTypes.array,
  feed: PropTypes.func,
};

export default CatsList;
