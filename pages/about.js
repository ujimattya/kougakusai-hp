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
        今年度のこうがく祭はオンラインでの開催となりました。
        <br />
        オンライン開催では研究室紹介やサークル企画等を特設サイト上にて配信します。
        <br />
        お楽しみください！
      </p>
      <h2>特設サイト</h2>
      <p>企画等は特設サイト上で配信されます。</p>
      <a href="https://kougakusai-special.vercel.app/" className={styles.btn__square}>
        特設サイトへ
      </a>
    </div>
    <Footer />
  </React.Fragment>
);

export default About;
