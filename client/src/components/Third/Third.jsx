import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Third.module.css';
import OneArtist from './OneArtist';
import 'antd/dist/antd.min.css';
import { findart } from '../../redux/actions/allArtistsAction';
import { addArtThunk } from '../../redux/actions/allArtistsAction';
<<<<<<< HEAD
import NaviMain from '../ui/Navi/NaviMain';
=======
import { getGenreThunk } from '../../redux/actions/getGenre';
>>>>>>> 3

export default function Third() {
  // const art = useSelector((store) => store.art);
  const genre = useSelector((store) => store.genre);
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addArtThunk());
<<<<<<< HEAD
=======
    dispatch(getGenreThunk());
>>>>>>> 3
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const selectHandler = (e) => {
    setSelect(e);
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
<<<<<<< HEAD
              <input type="text" className=" w-75 form-control " value={input} placeholder="Введите название" />
            </div>
            <div className="overflow-auto mt-3" style={{ height: '670px' }}>
              <div className="d-flex flex-column ">
                <OneArtist input={input} />
=======

              <div className="w-75 text-center my-2">
                <select className="form-select text-center" onChange={selectHandler} id="floatingSelect">
                  <option selected value={select}>Выберите жанр</option>
                  {genre.map((el) => (
                    <option value={el.id}>{el.name}</option>
                  ))}
                </select>
>>>>>>> 3
              </div>

              <input
                type="text"
                className=" w-75 form-control text-center my-1"
                value={input}
                onChange={changeHandler}
                placeholder="Введите название"
              />
            </div>
            <div className="overflow-auto d-flex justify-content-center" style={{ height: '450px' }}>
              <OneArtist input={input} select={select} />
            </div>

          </div>
        </div>
<<<<<<< HEAD
        <div className="d-flex flex-row-reverse opacity-75  d-inline-block">
=======
        <div className="d-flex flex-row-reverse w-75  d-inline-block">
>>>>>>> 3
          <img src="./yIMOHPxu2nE.jpeg" alt="third" />
          <NaviMain />
        </div>
      </div>
    </div>

  );
}
