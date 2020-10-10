import React from 'react';
import styles from '../styles/Day.module.scss';
// import Square from './Square';

const Day = () => {
  return (
    <div className={styles.container}>
      <img className={styles.plan} src="./day.png" alt="開催 １１月 7日"></img>
    </div>
  );
};

export default Day;
