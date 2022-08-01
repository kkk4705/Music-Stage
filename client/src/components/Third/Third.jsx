import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Third.module.css';
import OneArtist from './OneArtist';
import 'antd/dist/antd.min.css';
import { findart } from '../../redux/actions/allArtistsAction';
import { addArtThunk } from '../../redux/actions/allArtistsAction';

export default function Third() {
  const art = useSelector((store) => store.art);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addArtThunk());
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
    console.log('-->', input);
    // dispatch(findart(input));
    // dispatch(action());
  };

  return (
    <div
      id="third"
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
        width: '100vw',
        height: '100vh'
      }}
    >
      <div className="d-flex w-100 h-100 d-inline-block ">
        <div className="d-flex w-25 flex-column  d-inline-block justify-content-between">
          <div className="d-flex flex-column align-items-center ">
            <div className="d-flex flex-column  align-items-center ms-5">
              <p className={`${styles.text}`}>Список</p>
              <p className={`${styles.text2}`}>музыкантов </p>
              <input
                type="text"
                className=" w-75 form-control text-center "
                value={input}
                onChange={changeHandler}
                placeholder="Введите название"
              />
            </div>
            <div className="overflow-auto d-flex justify-content-center" style={{ height: '450px' }}>
              <OneArtist input={input} />
            </div>

          </div>
        </div>
        <div className="d-flex flex-row-reverse w-75  d-inline-block">
          <img src="./yIMOHPxu2nE.jpeg" alt="third" />
        </div>
      </div>

    </div>

  );
}
