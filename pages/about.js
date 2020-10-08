import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import Footer from '../components/Footer';

const About = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.title}>
      <img src="./decoration.svg" className={styles.decoration} />
      <h2>オンライン開催について</h2>
    </div>
    <div className={styles.side}>
      <div className={styles.side__title}>About</div>
    </div>
    <div className={styles.container}>
      <div className={styles.information__tate}>About</div>
      <p>
        今年度のこうがく祭は、昨今の情勢を鑑み、オンラインでの開催となりました。
        <br />
        オンライン開催では研究室紹介やサークル企画等を特設サイト上にて配信します。
        <br />
        お楽しみください！
      </p>
    </div>
    <Footer />
  </React.Fragment>
);

export default About;
