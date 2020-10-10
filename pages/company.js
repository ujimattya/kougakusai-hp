import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import Footer from '../components/Footer';

const Company = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.title}>
      <img src="./decoration.svg" className={styles.decoration} />
      <h2>協賛企業一覧</h2>
    </div>
    <div className={styles.side}>
      <div className={styles.side__title}>Company</div>
    </div>
    <div className={styles.container}>
      <div className={styles.information__tate}>Company</div>
      <p>ご協賛いただいた企業一覧（敬称略）</p>
    </div>
    <Footer />
  </React.Fragment>
);

export default Company;
