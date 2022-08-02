/* eslint-disable react/button-has-type */
import React from 'react';
import styles from '../ui.module.css';

export default function Button({
  body, value, type, funcOnClick
}) {
  return (
    <div className={styles.divbtn}>
      <button
        className={styles.button}
        onClick={funcOnClick}
        value={value}
        type={type}
      >
        {body}
      </button>
    </div>
  );
}
