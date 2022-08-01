import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackThunk } from '../../../redux/actions/getTrack';

function Add() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [file, setFile] = useState({});

  const user = useSelector((store) => store.user);
  const track = useSelector((store) => store.track);

  const fileHandler = (e) => {
    setFile((prev) => (e.target.files[0]));
    console.log(file);
  };

  const addTrack = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', user.id);
    // dispatch(getTrackThunk({ input, user, file }));
    dispatch(getTrackThunk(user, formData));
    setFile({});
  };

  console.log(track);
  return (
    <div className="">
      <form onSubmit={addTrack} encType="multipart/form-data">
        <div className="d-flex align-items-stretch">
          <div>
            <input value={input.file} name="file" onChange={fileHandler} className=" form-control bg-transparent rounded-0" id="formFileSm" type="file" />
          </div>
          <div><button type="submit" className="btn bg-transparent rounded-0 text-reset">Добавить</button></div>
        </div>
      </form>
      <hr />

    </div>
  );
}

export default Add;
