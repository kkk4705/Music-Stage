import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { delPlaceThunk } from '../../../redux/actions/allPlaceAction';

function Lists({ id_place }) {
  console.log('tytyturu', id_place);
  const dispatch = useDispatch();
  const [file, setFile] = useState({});

  const fileHandler = (e) => {
    setFile((prev) => (e.target.files[0]));
    console.log(file);
  };

  const places = useSelector((store) => store.owner.allPlace);
  const user = useSelector((store) => store.user);

  const placeOwn = places?.filter((elem) => elem['Place.owner_id'] === user.id)[0];

  const addTrack = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', user.id);
    setFile({});
  };

  const DelHandler = () => {
    console.log('430');
    dispatch(delPlaceThunk({ id_place }));
  };

  return (
    <ul className="list-group list-group-flush ">
      <div className="mb-3">
        <form onSubmit={addTrack} encType="multipart/form-data">

          <div className="d-flex flex-column m-2 align-items-center">
            <div className="w-50 d-flex flex-row  align-items-center mb-1">
              <input type="text" className="form-control text-center rounded-0" placeholder="Название" />
              <input type="text" className="form-control text-center rounded-0" placeholder="Адрес" />
              <input type="text" className="form-control text-center rounded-0" placeholder="Описание" />
            </div>

            <div className="d-flex align-items-center w-50 mb-1">
              <input
                name="file"
                onChange={fileHandler}
                className="
              form-control bg-transparent rounded-0 text-center"
                type="file"
              />
            </div>

            <button className="btn btn-outline-secondary w-50 rounded-0 mb-1" type="button" id="inputGroupFileAddon04">Добавить</button>

          </div>
        </form>
        <hr />

      </div>
      {placeOwn ? (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar ">
            <div className="w-10 me-4 rounded-full">
              <img src={placeOwn.photo} alt="..." />
            </div>
          </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{placeOwn['Place.name']}</div>
          </div>
          <div className="me-auto">
            <div className="">
              {placeOwn['Place.location']}
            </div>
          </div>
          <div className="me-auto ">
            <button
              type="button"
              className="btn btn-primary rounded-0 text-center"
              onClick={DelHandler}
            >
              Удалить
            </button>
            {/* <img src="././png/002-cancel.png" style={{ width: '20px' }} alt="logo" /> */}
          </div>

          <hr />
        </li>
      )
        : (
          <div />
        ) }

      <hr />
    </ul>
  );
}

export default Lists;
