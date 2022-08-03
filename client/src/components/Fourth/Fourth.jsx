import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Maps from './Maps/Maps';
import NaviPers from '../ui/Navi/NaviPers';

export default function Fourth() {
  return (
    <div
      id="fourth"
      style={{
        backgroundColor: `rgb(${25}, ${27}, ${22})`,
        width: '100vw',
        height: '100vh'
      }}
    >
      <NaviPers />
      <Maps />
    </div>
  );
}
