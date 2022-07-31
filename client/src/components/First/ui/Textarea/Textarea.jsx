import React from 'react';
import styles from '../ui.module.css';

export default function Textarea({
  name, placeholder, onChange
}) {
  return (
    <div className={styles.divinput}>
      <label htmlFor={name}>{placeholder}</label>
      <textarea onChange={onChange} name={name} style={{ height: '8rem' }} id={name} cols="30" rows="10" placeholder={placeholder} />
    </div>
  );
}
