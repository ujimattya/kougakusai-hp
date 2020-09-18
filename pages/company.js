import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';

const Company = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.container}>
      <div className={styles.information_tate}>Company</div>
      <div className={styles.title}>
        <img src="./decoration.svg" className={styles.decoration} />
        <h2>協賛企業一覧</h2>
      </div>
      <p>
        <br />
        オンライン開催では研究室紹介やサークル企画等を特設サイト上にて配信します。
        <br />
        お楽しみください！
      </p>
    </div>
  </React.Fragment>
);

export default Company;
