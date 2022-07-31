import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabses from './Table/Table';
import { addArtThunk } from '../../redux/actions/allArtistsAction';
import 'antd/dist/antd.min.css';

export default function PersonalPage() {
  const art = useSelector((store) => store.art);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addArtThunk());
  }, []);
  return (
    <div
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
        width: '100vw',
        height: '100vh'
      }}
    >
      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block">
        <div className="d-flex h-25 d-inline-block justify-content-between">
          <div className="d-flex flex-column justify-content-around m-5">
            <div className="d-flex flex-column  justify-content-around">
              <div className="avatar">
                <div className="w-16 rounded-full m-3">
                  <img src="https://placeimg.com/192/192/people" alt="..." />
                </div>
              </div>

            </div>
            <div className="d-flex my-2">Flex item 12</div>
            <div className="d-flex my-2">Flex item 13</div>
          </div>
          <div className="p-2 flex-fill m-5 ms-5">Flex item 3</div>
          <div className="d-flex">
            <div className="avatar">
              <div className="">
                <img src="./black2logo.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex p-2 px-5 flex-column">
          <div>Редактировать</div>
          <div>
            <hr className="w-50" />
          </div>

        </div>
        <div className="d-flex h-75 justify-content-between">
          <div className="d-flex w-50 flex-column justify-content-between px-5">
            <div className="d-flex m-5">
              <hr />
            </div>
            <div className="d-flex m-5 px-5">Flex item 9</div>
            <div className="d-flex m-5">Flex item 10</div>
          </div>
          <div className="w-75 d-flex flex-column p-5">
            <Tabses />
          </div>
        </div>
      </div>

    </div>
  );
}
