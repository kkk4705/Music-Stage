import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import Card from './Card';
import ModalEvent from './ModalEvent';
import Select from './Select';
import styles from './Second.module.css';

export default function Event() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addEventThunk());
  }, []);

  const search = useSelector((store) => store.search);
  // const eventType = useSelector((store) => store);

  return (
    <div
      id="second"
      style={{
        backgroundColor: `rgb(${0}, ${36}, ${57})`,
        width: '100vw',
        height: '120vh'
      }}
    >
      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block p-3">
        <div style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }} className="d-flex h-40 d-inline-block justify-content-center">
          <div className="w-75 ps-5 ms-5 mt-5 justify-content-center" style={{ backgroundColor: `rgb(${0}, ${36}, ${57})`, fontSize: '100px' }}>
            <div className={`fontword1 fs-1 d-flex justify-content-center ps-5 ms-5 fw-semibold text-light ${styles.fontword1}`}>АФИША</div>
            <div className={`fontword1 fs-3 d-flex justify-content-center ps-5 ms-5 fw-lighter text-light ${styles.fontword2}`}>СОБЫТИЙ</div>
            <div className="d-flex flex-row mb-5 mt-5 justify-content-around">
              <div className="input-group d-flex justify-content-center w-25 h-25 ">
                <input type="text" className="form-control opacity-75 d-flex justify-content-center w-25 h-15 rounded-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <Select />
            </div>
            <div className="d-flex flex-column align-items-end me-5 pe-5">.</div>
          </div>
          <div className="d-flex flex-column justify-content-start ms-4">
            <img src="whitelogo2.png" width="200px" alt="" />
          </div>
        </div>
        <div className={`overflow-auto mt-3 ${styles.over}`} style={{ height: '450px', marginTop: '75px' }}>
          <div className="d-flex flex-column ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
