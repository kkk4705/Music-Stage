import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Third.module.css';
// import { addArtThunk } from '../../redux/actions/allArtistsAction';
import OneArtist from './OneArtist';
import 'antd/dist/antd.min.css';

export default function Third() {
  const art = useSelector((store) => store.art);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addArtThunk());
  // }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
        width: '100vw',
        height: '100vh'
      }}
    >

      <div className="d-flex mb-3 w-100 h-100 d-inline-block ">
        <div className="d-flex w-25 flex-column  d-inline-block justify-content-between">
          <div className="d-flex flex-column justify-content-around ms-5 ">
            <div className="d-flex flex-column h-25 justify-content-around ">
              <p className={`${styles.text}`}>Список</p>
              <p className={`${styles.text2}`}>музыкантов </p>
              <input type="text" className=" w-75 form-control " value={input} onChange={changeHandler} placeholder="Введите название" />
            </div>
            <div className="overflow-auto mt-3" style={{ height: '450px' }}>
              <div className="d-flex flex-column ">
                <OneArtist input={input} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row-reverse opacity-75 w-75  d-inline-block overflow-visible">
          <img src="./yIMOHPxu2nE.jpeg" alt="third" />
        </div>
      </div>

    </div>

  );
}
