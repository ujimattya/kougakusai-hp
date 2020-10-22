import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import Footer from '../components/Footer';

const Contact = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.title}>
      <img src="./decoration.svg" className={styles.decoration} />
      <h2>お問い合わせ</h2>
    </div>
    <div className={styles.side}>
      <div className={styles.side__title}>Contact</div>
    </div>
    <div className={styles.container}>
      <div className={styles.information__tate}>Contact</div>
      <p>
        質問等があれば下記メールアドレスへお気軽にお問い合わせください。
        <br />

      </p>
      <h2>メールアドレス</h2>
      <p>kougakusai2020@gmail.com</p>
    </div>
    <Footer />
  </React.Fragment>
);

export default Contact;
