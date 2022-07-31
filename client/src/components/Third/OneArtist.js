import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import 'antd/dist/antd.min.css';
import ModalPage from './ModalPage';
import { addModalThunk } from '../../redux/actions/oneArtistAction';

export default function OneArtist({ id }) {
  const art = useSelector((store) => store.art);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setVisible(true);
    dispatch(addModalThunk(id));
  };

  return (
    <div onClick={clickHandler}>
      {art.map((el) => (
        <div className="card text-bg-ligth ">
          <div>
            <div>
              <img src={el.photo} className="card-img  h-25" alt={el.name} />
            </div>
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <Modal
                centered
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
                width={1100}
              >
                <ModalPage />
              </Modal>

              <div>
                <h5 className="card-title fw-bolder text-white fs-3">{el.name}</h5>
                <p className="card-text text-white fs-5">{el.genre}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
