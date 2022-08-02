/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Navi() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div
        style={{
          position: 'absolute', height: '16rem', width: '12rem', float: 'right'
        }}
        className="avatar"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <img src="././black2logo.png" alt="logo" />
      </div>
      <div
        style={{ backgroundColor: `rgb(${180}, ${180}, ${180})`, }}
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div style={{ justifyContent: 'center' }} className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Меню навигации</h5>
        </div>
        <div className="offcanvas-body ">
          <a href="#first"><Button type="button" body="Главная" /></a>
          <a href="#second"><Button type="button" body="Афиша событий" /></a>
          <a href="#third"><Button type="button" body="Список музыкантов" /></a>
          <a href="#fourth"><Button type="button" body="Карта площадок" /></a>
          <p> </p>
          {user && (
            <>
              <Link to="/personalPage"><Button type="button" body="Личный кабинет" /></Link>
              <Link to="/logout"><Button type="button" body="Выйти" /></Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
