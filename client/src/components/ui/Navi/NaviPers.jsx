import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Navi.module.css';

export default function Navi() {
  return (
    <>
      <div
        className={`${styles.divavatar} avatar`}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <img src="././black2logo.png" alt="logo" />
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
        <div className="offcanvas-body ">
          <Link to="/"><Button type="button" body="Главная" /></Link>
          <p> </p>
          <Link to="/logout"><Button type="button" body="Выйти" /></Link>
        </div>
      </div>
    </>
  );
}
