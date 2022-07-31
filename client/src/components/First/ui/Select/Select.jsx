import React from 'react';
import styles from '../ui.module.css';

export default function Select({
  options, name, placeholder
}) {
  return (
    <div className={styles.divinput}>
      <label htmlFor={name}>{placeholder}</label>
      <select defaultValue="Выбрать" name={name} id={name}>
        <option disabled value="Выбрать">Выбрать</option>
        {options.map((el, index) => <option key={index} value={el.value}>{el.body}</option>)}
      </select>
    </div>
  );
}
