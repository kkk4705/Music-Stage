/* eslint-disable max-len */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import Card from './Card';
import ModalEvent from './ModalEvent';

export default function Event() {
  const art = useSelector((store) => store.art);

  console.log(art);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addEventThunk());
  }, []);

  const event = useSelector((store) => store.event);
  const eventType = useSelector((store) => store.one);

  console.log(eventType);
  // console.log(event);
  return (
    <div
      style={{
        backgroundColor: `rgb(${0}, ${36}, ${57})`,
        width: '100vw',
        height: '130vh'
      }}
    >

      {/* <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block p-3">

      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block p-3">

        <div style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }} className="d-flex h-40 d-inline-block justify-content-center">
          <div className="w-75 ps-5 ms-5 mt-5 justify-content-center" style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }}>
            <div className="fs-1 d-flex justify-content-center ps-5 ms-5 fw-semibold text-light">АФИША</div>
            <div className="fs-3 d-flex justify-content-center ps-5 ms-5 fw-lighter text-light">СОБЫТИЙ</div>
            <div className="d-flex flex-row mb-5 mt-5 justify-content-around">
              <div className="d-flex card w-25 opacity-75 justify-content-space-around">
                <div>
                  <select className="form-select d-flex" aria-label="Default select example">
                    <option selected>EVENT TYPE</option>
                    <option value="1">SITE OPENING</option>
                    <option value="2">FESTIVAL</option>
                    <option value="3">CONCERT</option>
                  </select>
                </div>
              </div>
              <div className="input-group d-flex justify-content-center w-25 h-25">
                <input type="text" className="form-control opacity-75 d-flex justify-content-center w-25 h-15 rounded-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
            <div className="d-flex flex-column align-items-end me-5 pe-5">.</div>
          </div>
          <div className="d-flex flex-column justify-content-start mt-5 ms-4">
            <img src="whitelogo.png" width="100px" alt="" />
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}
