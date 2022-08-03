import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import Card from './Card';
import ModalEvent from './ModalEvent';
import Select from './Select';
import styles from './Second.module.css';
import { getSearchThunk } from '../../redux/actions/searchAction';
import { getTypeThunk } from '../../redux/actions/getType';
import Navi from '../ui/Navi/Navi';
import 'react-toastify/dist/ReactToastify.css';

export default function Event() {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('');
  const notify = () => toast('Вы уже отправили заявку на участие. Отменить заявку можно в личном кабинете.');

  const dispatch = useDispatch();
  // const changeType = (e) => {
  //   setInput(e.target.value);
  // };

  useEffect(() => {
    dispatch(addEventThunk());
    dispatch(getSearchThunk());
    dispatch(getTypeThunk());
  }, []);

  const search = useSelector((store) => store.search);
  const type = useSelector((store) => store.type);

  // const eventType = useSelector((store) => store);
  // console.log(search);
  return (
    <div
      id="second"
      style={{
        backgroundColor: `rgb(${0}, ${36}, ${57})`,
        width: '100vw',
        height: '120vh'
      }}
    >
      <Navi typeLogo="white" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block p-3">
        <div style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }} className="d-flex h-40 d-inline-block justify-content-center">
          <div className="w-75 ps-5 ms-5 mt-5 justify-content-center" style={{ backgroundColor: `rgb(${0}, ${36}, ${57})`, fontSize: '100px' }}>
            <div className={`fontword1 fs-1 d-flex justify-content-center ps-5 ms-5 fw-semibold text-light ${styles.fontword1}`}>АФИША</div>
            <div className={`fontword1 fs-3 d-flex justify-content-center ps-5 ms-5 fw-lighter text-light ${styles.fontword2}`}>СОБЫТИЙ</div>
            <div className="d-flex flex-row mb-5 mt-5 justify-content-around">
              <div className="input-group d-flex justify-content-center w-25 h-25 ">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="form-control opacity-75 d-flex justify-content-center w-25 h-15 rounded-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div className="d-flex card w-25 opacity-75 justify-content-space-around">
                <div>
                  <select className="form-select d-flex" aria-label="Default select example" value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option selected disabled hidden>Тип события</option>
                    {type.map((el) => (
                      <option
                        key={el.id}
                        value={el.id}
                      >
                        {el.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end me-5 pe-5">.</div>
          </div>
          <div className="d-flex flex-column justify-content-start ms-4">
            {/* <img src="whitelogo2.png" width="200px" alt="" /> */}
          </div>
        </div>
        <div className={`overflow-auto mt-3 ${styles.over}`} style={{ height: '450px', marginTop: '75px' }}>
          <div className="d-flex flex-column ">
            {search
              .filter(((el) => el['Event.name']
                .toLowerCase()
                .includes(input.toLowerCase()))).map((el) => (<Card />))}
            {search
              .filter(((el) => +el['Event.type_id'] === +select)).map((el) => (<Card />))}
          </div>
        </div>
      </div>
    </div>
  );
}
