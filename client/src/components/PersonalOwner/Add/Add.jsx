import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackThunk, allTrackThunk } from '../../../redux/actions/getTrack';
<<<<<<< HEAD

function Add() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [file, setFile] = useState({});

  const user = useSelector((store) => store.user);
  const track = useSelector((store) => store.track);
=======
import { getTypeThunk } from '../../../redux/actions/getType';

function Add() {
  const dispatch = useDispatch();
  // const [input, setInput] = useState({});
  const [file, setFile] = useState({});
  const place = useSelector((store) => store.place);
  const type = useSelector((store) => store.type);
  const user = useSelector((store) => store.user);
  const places = place?.filter((elem) => elem.owner_id === user.id)[0];
>>>>>>> 3

  const fileHandler = (e) => {
    setFile((prev) => (e.target.files[0]));
  };

  const addTrack = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', user.id);
    dispatch(getTrackThunk(user, formData));
    setFile({});
  };

  return (
    <div className="">
      <form onSubmit={addTrack} encType="multipart/form-data">

        <div className="d-flex flex-column m-2 align-items-center">
          <div className="w-50 d-flex flex-row  align-items-center mb-1">
            <input type="text" className="form-control text-center rounded-0" placeholder="Название" />
            <input type="text" className="form-control text-center rounded-0" placeholder="Адрес" />
            <input type="text" className="form-control text-center rounded-0" placeholder="Описание" />
          </div>

          <div className="w-50 text-center my-2">
            <select className="form-select text-center" id="floatingSelect">
              <option selected value="select">Выберите место</option>
              {/* {places.map((el) => ( */}
              <option value={places.id}>{places.name}</option>
              {/* ))} */}
            </select>
          </div>

          <div className="w-50 text-center my-2">
            <select className="form-select text-center" id="floatingSelect">
              <option selected value="select">Выберите событие</option>
              {type.map((el) => (
                <option value={el.id}>{el.name}</option>
              ))}
            </select>
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
  );
}

export default Add;
