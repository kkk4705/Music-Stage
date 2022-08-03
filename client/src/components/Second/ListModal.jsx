import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import { addArtThunk } from '../../redux/actions/allArtistsAction';

function Lists() {
  const event = useSelector((store) => store.event);
  const art = useSelector((store) => store.art);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addArtThunk());
  }, []);

  return (
    <ul className="list-group list-group-flush ">
      {event.map((el) => (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar ">
            <div className="d-flex flex-row w-10 me-1 rounded-full ">
              <img src="https://placeimg.com/192/192/people" alt="..." />
            </div>
            {/* {art.map((element) => ( */}
            <div className="d-flex ms-2 justify-content-center align-items-center">
              {el['Artist.name']}
            </div>
            {/* {element.name} */}
            {/* ))} */}
          </div>
          {/* <div className="ms-1"> */}
          {/* <div className="me-3 text-break">{el['Artist.name']}</div> */}
          {/* {el['Event.Place.name']} */}
          {/* </div> */}
          {/* <div className="me-3"> */}
          {/* <div className="fw-light">{el['Event.name']}</div> */}
          {/* {el['Event.name']} */}
          {/* </div> */}
          {/* {art.map((element) => ( */}
          {/* <div className="me-auto"> */}
          {/* <div className="fw-light">{element.genre}</div> */}
          {/* {el['Event.date']} */}
          {/* </div> */}
          {/* ))} */}
          <hr />
        </li>
      ))}
      <hr />
    </ul>
  );
}

export default Lists;
