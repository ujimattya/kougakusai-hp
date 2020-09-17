import React from 'react';
import styles from '../styles/Day.module.scss';
// import Square from './Square';

const Day = () => {
  return (
    <div className={styles.container}>
      <img className={styles.plan} src="./day.png"></img>
    </div>
  );
};

export default Day;
