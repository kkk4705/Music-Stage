import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';

function Lists({ info }) {
  return (
    <ul className="list-group list-group-flush ">
      <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
        <div className="avatar">
          <div className="w-10 me-4 rounded-full">
            <img src={info['Event.photo']} alt="..." />
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{info['Event.Place.name']}</div>
          {info['Event.Place.location']}
        </div>
        <div className="me-auto">
          <div className="">
            {info['Event.name']}
          </div>
        </div>
        <div className="me-auto">
          <div className="">{(info.status === null) ? 0 : 1}</div>
        </div>
        <div className="me-auto">
          <div className="">{info['Event.date']}</div>
        </div>

        <hr />
      </li>

      <hr />
    </ul>
  );
}

export default Lists;
