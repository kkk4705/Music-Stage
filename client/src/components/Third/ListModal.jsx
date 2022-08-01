import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import { addEventThunk } from '../../redux/actions/allEventsAction';

function Lists() {
  const event = useSelector((store) => store.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addEventThunk());
  }, []);

  return (
    <ul className="list-group list-group-flush ">
      {event.map((el) => (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar ">
            <div className="w-10 me-1 rounded-full ">
              <img src="https://placeimg.com/192/192/people" alt="..." />
            </div>
          </div>
          <div className="ms-1">
            <div className="me-3 text-break">{el['Event.Place.name']}</div>
          </div>
          <div className="me-3">
            <div className="fw-light">{el['Event.name']}</div>
          </div>

          <div className="me-3">
            {el.status ? <img src="././png/001-check.png" style={{ width: '20px' }} alt="..." /> : <img src="././png/003-loading.png" style={{ width: '20px' }} alt="..." />}
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
