/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { addArtThunk } from '../../redux/actions/allArtistsAction';
import { addEventThunk, oneEventThunk } from '../../redux/actions/allEventsAction';
import { addModalThunk } from '../../redux/actions/oneArtistAction';
import NaviPers from '../ui/Navi/NaviPers';
import Tabses from './Table/Table';

export default function PersonalPage() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
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

  const artist = event?.filter((elem) => elem.id === user.id)[0];
  const currUser = art?.filter((elem) => elem.id === user.id)[0];
  console.log(currUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addArtThunk());
    dispatch(addEventThunk());
  }, []);

  return (
    <div
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
        width: '100vw',
        height: '100vh'
      }}
    >
      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block">
        <NaviPers />
        <div className="d-flex p-2 h-40 d-inline-block justify-content-between" onClick={handleOpen}>
          <div className="d-flex flex-column justify-content-around ms-5">
            <div className="d-flex flex-column justify-content-around">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={(currUser) ? `http://localhost:3030/music/${currUser.photo}` : <Spin indicator={antIcon} />} alt="567" />
                </div>
              </div>
            </div>
            <div className="d-flex fw-lighter">Жанр:</div>
            <Link to="/">
              <div className="">{(currUser) ? currUser.genre : <Spin indicator={antIcon} />}</div>
            </Link>
          </div>

          {/* <div className="p-2 flex-fill  ms-5 fs-4 fw-bold">{artist?.name}</div> */}

          <div className="avatar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            {/* <img src="././black2logo.png" alt="logo" /> */}
          </div>
        </div>

        <div className="w-50 h4 pb-2 mb-4 border-bottom border-danger" />

        <div className="d-flex h-75 justify-content-between">
          <div className="d-flex w-50 flex-column justify-content-between px-5">
            <div className="d-flex m-3" />
            <div className="d-flex text-center ">{(currUser) ? currUser.info : <Spin indicator={antIcon} />}</div>
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
            <Tabses info={artist} />
          </div>
          {/* <div
              style={{ backgroundColor: `rgb(${180}, ${180}, ${180})`, }}
              className="offcanvas offcanvas-end"
              data-bs-scroll="true"
              tabIndex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Меню навигации</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body ">
                <button type="submit" className="btn bg-transparent rounded-0 my-3 text-reset">Главная</button>
                <button type="submit" className="btn bg-transparent rounded-0 my-3 text-reset">Афиша событий</button>
                <button type="submit" className="btn bg-transparent rounded-0 my-3 text-reset">Список музыкантов</button>
                <button type="submit" className="btn bg-transparent rounded-0 my-3 text-reset">Карта площадок</button>
                <button type="submit" className="btn bg-transparent rounded-0 my-3 text-reset">Личный кабинет</button>
              </div>
            </div> */}

        </div>
      </div>

    </div>

  );
}
