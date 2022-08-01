import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import 'antd/dist/antd.min.css';
import ModalPage from './ModalPage';
// import { addModalThunk } from '../../redux/actions/oneArtistAction';
import { findArtThunk } from '../../redux/actions/findArtist';

export default function OneArtist({ input }) {
  const [data, setData] = useState('');
  const art = useSelector((store) => store.art);
  const find = useSelector((store) => store.find);

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  // НЕ РАБОТАЕТ ПОИСК ПО МУЗЫКАНТУ
  useEffect(() => {
    setData(input);
    dispatch(findArtThunk(input));

    // dispatch(addArtThunk());
  }, []);

  const clickHandler = () => {
    setVisible(true);
    // dispatch(addModalThunk(id));
  };

  return (
    <div onClick={clickHandler}>
      {
        input ? (
          <div className="card text-bg-ligth ">
            <div>
              <div>
                <img src={find.photo} className="card-img  h-25" alt={find.name} />
              </div>
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <Modal
                  centered
                  visible={visible}
                  footer={null}
                  onCancel={() => setVisible(false)}
                  width={1100}
                >
                  <ModalPage id={find.id} />
                </Modal>

                <div>
                  <h5 className="card-title fw-bolder text-white fs-3">{find.name}</h5>
                  <p className="card-text text-white fs-5">{find.genre}</p>
                </div>
              </div>
            </div>
          </div>
        )
          : (
            <>
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
                        <ModalPage id={el.id} />
                      </Modal>

                      <div>
                        <h5 className="card-title fw-bolder text-white fs-3">{el.name}</h5>
                        <p className="card-text text-white fs-5">{el.genre}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )
      }
    </div>
  );
}
