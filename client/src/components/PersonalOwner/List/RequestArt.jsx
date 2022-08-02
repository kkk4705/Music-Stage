import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';

function ReqArt() {
  const event = useSelector((store) => store.event);
  const user = useSelector((store) => store.user);

  const artEvent = event?.filter((elem) => elem['Event.Place.Owner.id'] === user.id)[0];
  console.log(artEvent);

  return (
    <ul className="list-group list-group-flush ">
      <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent ms-5">
        <div className="ms-3 me-auto">
          <div className="">
            <p> Группа:</p>
          </div>
        </div>
        <div className="ms-4 me-auto">
          <div className="">
            <p> Мероприятие:</p>
          </div>
        </div>
        <div className="ms-4 me-auto">
          <div className="">
            <p> Жанр:</p>
          </div>
        </div>
        <div className="ms-4 me-auto">
          <div className="">
            <p> Сообщение:</p>
          </div>
        </div>
        <div className="me-auto">
          <div className="">
            <p> Статус заявки:</p>
          </div>
        </div>

        <hr />
      </li>

      <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
        <div className="avatar">
          <div className="w-10 me-4 rounded-full">
            <img src={artEvent['Artist.photo']} alt="..." />
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{artEvent['Artist.name']}</div>
        </div>
        <div className="me-auto">
          <div className="">
            {artEvent['Event.name']}
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{artEvent['Artist.genre']}</div>
        </div>
        <div className="me-auto">
          <div className="" style={{ width: '100px' }}>
            &quot;
            {artEvent.message}
            &quot;
          </div>
        </div>
        <div className="me-auto">
          <img src="././png/002-cancel.png" style={{ width: '20px' }} alt="logo" />
        </div>

        <hr />
      </li>

      <hr />
    </ul>
  );
}

export default ReqArt;
