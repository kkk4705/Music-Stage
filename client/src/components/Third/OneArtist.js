import React from 'react';
import styles from './Third.module.css';
import ModalArtist from './ModalArtist';

export default function OneArtist({
  photo, id, name, genre
}) {
  return (

    <div className="card text-bg-ligth overflow-scroll">
      {photo && (
        <div>
          <div className={`${styles.group}`}>
            <img src={photo} className="card-img  h-25" alt={name} />
          </div>
          <div className="card-img-overlay d-flex flex-column justify-content-between">
            <div>
              <ModalArtist />
            </div>
            <div>
              <h5 className="card-title fw-bolder text-white fs-3">{name}</h5>
              <p className="card-text text-white fs-5">{genre}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
