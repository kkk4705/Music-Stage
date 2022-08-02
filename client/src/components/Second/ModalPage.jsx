import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from 'antd';
import Tabses from './TableModal';
import { addModalThunk } from '../../redux/actions/oneArtistAction';

export default function PersonalPage() {
  const event = useSelector((store) => store.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addModalThunk());
  }, []);

  return (
    <>
      {event.map((el) => (
        <div style={{
          backgroundColor: `rgb(${230}, ${230}, ${230})`,
        }}
        >
          <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block">

            <div className="d-flex p-2 h-40 d-inline-block justify-content-between">

              <div className="p-2 flex align-items-center mt-0 ms-5 fs-1 fw-normal fw-bold">{el['Event.Place.name']}</div>
              <div className="avatar">
                <img src="././black2logo.png" alt="logo" />
              </div>
            </div>
            <div className="p-2 flex-fill ms-5 fs-5 fw-normal">{el['Event.namek']}</div>
            <div className="p-2 align-items-center justify-content-start flex ms-5 fs-5">{el['Event.date']}</div>
            <div className="w-50 h4 pb-2 mb-4 border-bottom border-danger" />
            <div className="d-flex h-75 justify-content-between">
              <div className="d-flex w-50 flex-column justify-content-between px-5">
                <div className="d-flex m-3" />
                <div className="d-flex text-center lh-lg ">{el['Event.info']}</div>
                <div className="d-flex " />
              </div>
              <div className="w-75 d-flex flex-column p-3">
                <Tabses />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
