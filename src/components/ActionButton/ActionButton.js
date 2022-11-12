import React from 'react';
import styles from './ActionButton.module.css';

export const ActionButton = ({ text, action }) => {
  return (
    <button className={styles.actionButton} onClick={action}>
      {text}
    </button>
  );
};
