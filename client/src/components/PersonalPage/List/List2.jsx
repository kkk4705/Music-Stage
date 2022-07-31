import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackThunk } from '../../../redux/actions/getTrack';

function Lists2() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrackThunk());
  }, []);
  const track = useSelector((store) => store.track);
  console.log(track);

  return (
    <ul className="list-group list-group-flush ">
      <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
        <div className="avatar">
          <div className="w-10 me-4 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="..." />
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Бар</div>
          его описание
        </div>
        <div className="me-auto">
          <div className="">Ивент</div>
        </div>
        <div className="me-auto">
          <div className="">Статус</div>
        </div>
        <div className="me-auto">
          <div className="">Дата</div>
        </div>

        <hr />
      </li>

      <hr />
    </ul>
  );
}

export default Lists2;
