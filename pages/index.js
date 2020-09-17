import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/index.module.scss';

const Home = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.container}>
      <div className={styles.information_tate}>Information</div>
      <div className={styles.title}>
        <img src="./decoration.svg" className={styles.decoration} />
        <h2>お知らせ</h2>
      </div>
      <p>
        0月7日　機能を追加しました
        <br />
        9月30日　〜を更新しました
      </p>
    </div>
  </React.Fragment>
);

export default Home;
