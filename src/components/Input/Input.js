import React from 'react';
import styles from './Input.module.css';

export const Input = ({ name, type, placeholder, onChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};
