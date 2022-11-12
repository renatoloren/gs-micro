import React from 'react';
import styles from './PageLayout.module.css';
import Arrow from '../../assets/MiniArrow.svg';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from '../ActionButton/ActionButton';

export const PageLayout = ({
  title,
  headerButton,
  children,
  headerColor,
  headerButtonAction,
  back,
}) => {
  let navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header
        className={styles.layoutHeader}
        style={{ backgroundColor: headerColor }}
      >
        <button className={styles.backButton} onClick={() => navigate(back)}>
          <img src={Arrow}></img>
        </button>
        <h1 className={styles.layoutTitle}>{title}</h1>
        {headerButton ? (
          <ActionButton text={headerButton} action={headerButtonAction} />
        ) : null}
      </header>
      <section className={styles.mainContent}>{children}</section>
    </div>
  );
};
