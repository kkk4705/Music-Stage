import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import NaviMain from '../ui/Navi/NaviMain';
import Card from './Card';
import ModalEvent from './ModalEvent';
import Select from './Select';
import styles from './Second.module.css';
import { getSearchThunk } from '../../redux/actions/searchAction';

export default function Event() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addEventThunk());
    dispatch(getSearchThunk());
  }, []);

  const search = useSelector((store) => store.search);
  // const eventType = useSelector((store) => store);
  console.log(search);
  return (
    <div
      id="second"
      style={{
        backgroundColor: `rgb(${0}, ${36}, ${57})`,
        width: '100vw',
        height: '120vh'
      }}
    >
      <NaviMain typeLogo="white" />
      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block p-3">
        <div style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }} className="d-flex h-40 d-inline-block justify-content-center">
          <div className="w-75 ps-5 ms-5 mt-5 justify-content-center" style={{ backgroundColor: `rgb(${0}, ${36}, ${57})`, fontSize: '100px' }}>
            <div className={`fontword1 fs-1 d-flex justify-content-center ps-5 ms-5 fw-semibold text-light ${styles.fontword1}`}>АФИША</div>
            <div className={`fontword1 fs-3 d-flex justify-content-center ps-5 ms-5 fw-lighter text-light ${styles.fontword2}`}>СОБЫТИЙ</div>
            <div className="d-flex flex-row mb-5 mt-5 justify-content-around">
              <div className="input-group d-flex justify-content-center w-25 h-25 ">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="form-control opacity-75 d-flex justify-content-center w-25 h-15 rounded-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <Select />
            </div>
            <div className="d-flex flex-column align-items-end me-5 pe-5">.</div>
          </div>
          <div className="d-flex flex-column justify-content-start ms-4"> </div>
        </div>
        <div className={`overflow-auto mt-3 ${styles.over}`} style={{ height: '450px', marginTop: '75px' }}>
          <div className="d-flex flex-column ">
            {search
              .filter(((el) => el['Event.name']
                .toLowerCase()
                .includes(input.toLowerCase()))).map((el) => (<Card />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
