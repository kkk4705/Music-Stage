import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import { addArtThunk } from '../../redux/actions/allArtistsAction';

function Lists() {
  const art = useSelector((store) => store.art);
  console.log('-->', art);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addArtThunk());
  }, []);

  return (
    <ul className="list-group list-group-flush ">
      {art.map((el) => (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar ">
            <div className="d-flex flex-row w-10 me-1 rounded-full ">
              <img src="https://placeimg.com/192/192/people" alt="..." />
            </div>
            <div className="d-flex justify-content-center align-items-center">ustal</div>
          </div>
          <div className="ms-1">
            <div className="me-3 text-break">{el['Event.Place.name']}</div>
          </div>
          <div className="me-3">
            <div className="fw-light">{el['Event.name']}</div>
          </div>
          <div className="me-auto">
            <div className="fw-light">{el['Event.date']}</div>
          </div>

          <hr />
        </li>
      ))}
      <hr />
    </ul>
  );
}

export default Lists;
