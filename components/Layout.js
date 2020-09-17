import React from 'react';
import styles from '../styles/Layout.module.scss';
import Header from './Header';
import Day from './Day';
import Head from 'next/head';

const Layout = ({ children }) => (
  <React.Fragment>
    <Day />
    <div className={styles.container}>
      <div className={styles.wrap}>
        <img src="./title.png" className={styles.title} />
      </div>
      <div className={styles.backWrapA}>
        <img src="./background.svg" className={styles.backgroundA} />
      </div>
      <div className={styles.backWrapB}>
        <img src="./background.svg" className={styles.backgroundB} />
      </div>
      <div className={styles.backWrapC}>
        <img src="./background.svg" className={styles.backgroundC} />
      </div>
      {children}
    </div>
    <Header />
  </React.Fragment>
);
export default Layout;
