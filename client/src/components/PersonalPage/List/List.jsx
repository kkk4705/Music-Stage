import {
  Avatar, Divider, List, Skeleton
} from 'antd';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import 'antd/dist/antd.min.css';

function Lists() {
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

export default Lists;
