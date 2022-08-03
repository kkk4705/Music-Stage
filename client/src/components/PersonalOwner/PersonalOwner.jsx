import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOwnerThunk } from '../../redux/actions/allOwnerAction';
import { addEventThunk, oneEventThunk } from '../../redux/actions/allEventsAction';
import { addPlaceThunk } from '../../redux/actions/allPlaceAction';
import NaviPers from '../ui/Navi/NaviPers';
import Tabses from './Table/Table';
import { getTypeThunk } from '../../redux/actions/getType';

export default function PersonalPage() {
  const style = {
    position: 'absolute',
    top: '15%',
    left: '86%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const owners = useSelector((store) => store.owner.allOwner);
  const user = useSelector((store) => store.user);
  const event = useSelector((store) => store.event);

  const owner = owners?.filter((elem) => elem.id === user.id)[0];
  const events = event?.filter((elem) => elem['Event.Place.Owner.id'] === user.id)[0];

  console.log(owner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOwnerThunk());
    dispatch(addEventThunk());
    dispatch(addPlaceThunk());
    dispatch(getTypeThunk());
  }, []);

  return (
    <div
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
        width: '100vw',
        height: '100vh',
      }}
    >
      { (owner) ? (

        <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block">
          <NaviPers />
          <div className="d-flex p-2 h-40 d-inline-block justify-content-between" onClick={handleOpen}>
            <div className="d-flex flex-column justify-content-around ms-5">
              <div className="d-flex flex-column justify-content-around">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src={(owner) ? owner.photo : 'empty'} alt="567" />
                  </div>
                </div>
              </div>
              <div className="d-flex fw-lighter fs-6">Организатор</div>
              {/* <Link to="/">
                <div className=""> empty</div>
              </Link> */}
            </div>
            <div className="p-2 flex-fill  ms-5 fs-4 fw-bold">{owner?.name}</div>
          </div>

          <div className="w-50 h4 pb-2 mb-4 border-bottom border-danger" />

          <div className="d-flex h-75 ">
            <div className="d-flex w-50 flex-column justify-content-between px-5">
              <div className="d-flex text-center fs-6 ">{owner.info}</div>

              <div className="position-absolute bottom-10 start-0 opacity-75" style={{ width: '320px' }}>
                <img src="././ySCJx3esDdM.png" alt="logo" />
              </div>

              <div className="d-flex justify-content-center mb-3 mt-3 flex-row ">
                <div className=" ms-2 ">
                  <a href={owner.instagram}><img src="././png/003-instagram.png" style={{ width: '30px' }} alt="logo" /></a>
                </div>
                <div className=" ms-2 ">
                  <a href={owner.mail}><img src="././png/004-mail.png" style={{ width: '30px' }} alt="logo" /></a>
                </div>
              </div>
            </div>
            <div className="w-75 d-flex flex-column p-3 =">
              <Tabses key={events?.id} />
            </div>

          </div>
        </div>
      ) : 'empty' }

    </div>

  );
}
