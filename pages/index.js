import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/index.module.scss';

const Home = () => (
  <React.Fragment>
    <Layout></Layout>
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
    </div>
  </React.Fragment>
);

export default Home;
