/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import styles from './First.module.css';
import Button from './ui/Button/Button';
import FormAuth from './ui/FormAuth/FormAuth';
import FormReg from './ui/FormReg/FormReg';

export default function First() {
  const [form, setForm] = useState('main');

  return (
    <div className={styles.headdiv}>
      <div className={styles.imegediv}> </div>
      <div className={styles.formdiv}>
        <div className={styles.formdivlogo}>
          <img src="/blacklogo.png" alt="blacklogo" />
        </div>
        <hr className={styles.hrline} />

        {/* MAIN */}
        {form === 'main' && (
          <div className={styles.formdivbody}>
            <h3>Платформа для музыкантов и организаторов мероприятий</h3>
            <Button funcOnClick={() => setForm('artist')} value="artist" type="button" body="МУЗЫКАНТ" />
            <Button funcOnClick={() => setForm('owner')} value="owner" type="button" body="ОРГАНИЗАТОР" />
            <p>листай вниз, чтобы увидеть афишу</p>
          </div>
        )}

        {/* REG */}
        {(form === 'artist' || form === 'owner') && (
          <div className={`${styles.formdivbody} ${styles.formdivform}`}>
            <p>
              <a href="#" onClick={() => setForm('main')}>Назад</a>
              |
              <a href="#" onClick={() => setForm(form)}>Регистрация</a>
              |
              <a href="#" onClick={() => setForm(`auth${form}`)}>Вход</a>
            </p>
            <h3>Регистрация</h3>
            <FormReg typeUser={form} />
          </div>
        )}

        {/* AUTH */}
        {(form === 'authartist' || form === 'authowner') && (
          <div className={`${styles.formdivbody} ${styles.formdivform}`}>
            <p>
              <a href="#" onClick={() => setForm('main')}>Назад</a>
              |
              <a href="#" onClick={() => setForm(form.slice(4))}>Регистрация</a>
              |
              <a href="#" onClick={() => setForm(form)}>Вход</a>
            </p>
            <h3>Вход</h3>
            <FormAuth typeUser={form} />
          </div>
        )}
      </div>
    </div>
  );
}