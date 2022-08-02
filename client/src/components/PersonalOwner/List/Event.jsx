import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackThunk, allTrackThunk } from '../../../redux/actions/getTrack';

function Lists2() {
  const dispatch = useDispatch();
  const event = useSelector((store) => store.event);
  const user = useSelector((store) => store.user);

  const eventOwn = event.filter((elem) => elem['Event.Place.Owner.id'] === user.id);
  console.log('84802', eventOwn);

  return (
    <ul className="list-group list-group-flush ">
      {eventOwn?.map((elem) => (
        <>
          <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
            <div className="avatar">
              <div className="w-10 me-4 rounded-full">
                <img src={elem['Event.photo']} alt="..." />
              </div>
            </div>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{elem['Event.name']}</div>
            </div>
            <div className="me-auto">
              <div className="">
                {elem['Event.Type.name']}
              </div>
            </div>
            <div className="me-auto d-flex justify-content-center">
              <img src="././png/002-cancel.png" style={{ width: '20px' }} alt="logo" />
            </div>

            <hr />
          </li>

          <hr />
        </>
      ))}
    </ul>
  );
}

export default Lists2;
