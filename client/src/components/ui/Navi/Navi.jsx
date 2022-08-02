/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Navi.module.css';

export default function Navi({ typeLogo, typeNav }) {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div
        className={`${styles.divavatar} avatar`}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        {typeLogo === 'white' ? (
          <img src="././whitelogo2.png" alt="logo" />
        ) : (
          <img src="././black2logo.png" alt="logo" />
        )}
      </div>
      <div
        className={`${styles.divcanvas} offcanvas offcanvas-end`}
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div style={{ justifyContent: 'center' }} className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Меню навигации</h5>
        </div>
        {typeNav === 'pers' ? (

          // ====== Nav for PersPage ======
          <div className="offcanvas-body ">
            <Link to="/"><Button type="button" body="Главная" /></Link>
            <p> </p>
            <Link to="/logout"><Button type="button" body="Выйти" /></Link>
          </div>
          // ====== Nav for PersPage ======

        ) : (

          // ====== Nav for MainPage ======
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
          // ====== Nav for MainPage ======
        )}
      </div>
    </>
  );
}
