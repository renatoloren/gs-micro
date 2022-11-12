import React from 'react';
import styles from './Home.module.css';
import Arrow from '../../assets/arrow.svg';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  let navigate = useNavigate();
  const options = [
    { name: 'registrar novo veículo', link: '/vehicles' },
    { name: 'vendas regionais', link: '/regionals' },
    { name: 'qualidade do ambiente', link: '/enviroments' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hello}>Hello, User</header>
      <div className={styles.menu}>
        {options.map((opt, i) => (
          <div
            key={i}
            className={styles.menuOption}
            onClick={() => navigate(opt.link)}
          >
            <p>{opt.name}</p>
            <img src={Arrow} className={styles.arrow}></img>
          </div>
        ))}
      </div>
    </div>
  );
};
