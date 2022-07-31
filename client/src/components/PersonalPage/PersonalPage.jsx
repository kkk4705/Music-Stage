import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArtThunk } from '../../redux/actions/allArtistsAction';
import { oneEventThunk } from '../../redux/actions/allEventsAction';
import Tabses from './Table/Table';

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
  const art = useSelector((store) => store.art);
  const arts = useSelector((store) => store.art);
  const user = useSelector((store) => store.user);
  const event = useSelector((store) => store.event);
  // const { number, name, type } = user;
  const artist = arts[1];

  const dispatch = useDispatch();
  console.log(event);
  useEffect(() => {
    dispatch(addArtThunk());
    dispatch(oneEventThunk(1));
  }, []);
  // {id: 4, name: 'Bearthooth', type: 'artist'}
  // id: 4
  // name: "Bearthooth"
  // type: "artist"
  return (
    <div
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
        width: '100vw',
        height: '100vh'
      }}
    >

      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block">
        <div className="d-flex p-2 h-40 d-inline-block justify-content-between" onClick={handleOpen}>
          <div className="d-flex flex-column justify-content-around ms-5">
            <div className="d-flex flex-column justify-content-around">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={artist?.photo} alt="567" />
                </div>
              </div>
            </div>
            <div className="d-flex fw-lighter">Жанр:</div>
            <div className="">{artist?.genre}</div>
          </div>

          <div className="p-2 flex-fill  ms-5 fs-4 fw-bold">{artist?.name}</div>

          <div className="avatar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <img src="././black2logo.png" alt="logo" />
          </div>
        </div>

        <div className="w-50 h4 pb-2 mb-4 border-bottom border-danger" />

        <div className="d-flex h-75 justify-content-between">
          <div className="d-flex w-50 flex-column justify-content-between px-5">
            <div className="d-flex m-3" />
            <div className="d-flex text-center ">{}</div>
            <div className="d-flex " />

            <div className="d-flex justify-content-center mb-3 mt-3 flex-row ">
              <div className="ms-1 ">
                <a href={1}>
                  <img src="././png/002-vkontakte.png" style={{ width: '20px' }} alt="logo" />
                </a>
              </div>
              <div className=" ms-2 ">
                <a href={1}><img src="././png/003-instagram.png" style={{ width: '20px' }} alt="logo" /></a>
              </div>
              <div className=" ms-2 ">
                <a href={1}><img src="././png/004-mail.png" style={{ width: '20px' }} alt="logo" /></a>
              </div>
            </div>
          </div>
          <div className="w-75 d-flex flex-column p-3 =">
            <Tabses />
          </div>

          <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <button type="submit" className="btn bg-transparent rounded-0 my-3">Добавить</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
