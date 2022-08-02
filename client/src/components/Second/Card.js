import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import ModalEvent from './ModalEvent';
import styles from './Second.module.css';

export default function Card() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addEventThunk());
  }, []);
  const event = useSelector((store) => store.event);
  // const eventType = useSelector((store) => store.one);
  // console.log(event);

  return (
    <div style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }} className={`cardHeight d-flex flex-column justify-content-center align-items-center mt-5${styles.cardHeight}`}>
      {event.map((el) => (
        <div key={el.id} id="simple-list-item-1" className={`ono col-8 d-flex justify-content-center align-items-center mt-5 mb-5 ${styles.ono}`}>
          <div className="card rounded-5 mt-5 text-bg-dark d-flex h-100 w-100 ms-0 d-flex align-content-center">
            <div className="card-text d-flex justify-content-center fs-1 fw-lighter m-0 mt-0 mb-5 fs-1">
              <div className="card-title d-flex fs-1 fw-lighter m-0 mt-4 fs-1 text-break">{el['Event.name']}</div>
              <img src={el['Event.photo']} className="d-flex rounded-5 card-img opacity-50 position-absolute" alt="..." />
            </div>
            <div className="card-img d-flex justify-content-around flex-row mt-5">
              <div className="cartadiv ms-5 d-flex flex-column justify-content-start align-items-start">
                <div>
                  <button type="button" className={`knopka d-flex justify-content-start card align-items-start btn btn-outline-secondary ${styles.knopka}`}>Secondary</button>
                </div>
                <div className="card d-flex opacity-50 ">
                  <div style={{ color: `rgb(${0}, ${36}, ${57})` }} className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-start align-items-end">{el['Event.date']}</h6>
                    <p className="card-text ">{el['Event.Place.name']}</p>
                  </div>
                </div>

              </div>
              <div className="cartadiv d-flex justify-content-start align-items-start w-25 h-25 ">
                <div className="card d-flex justify-content-start opacity-50 ">
                  <div style={{ color: `rgb(${0}, ${36}, ${57})` }} className="card-body">
                    <h6 className="card-text d-flex justify-content-start ">{el['Artist.name']}</h6>
                    <p className="card-text">ЗАКЛАДКА</p>
                    <p className="card-text">10 дней без горячей воды</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <ModalEvent />
          </div>
        </div>
      ))}
    </div>
  );
}
