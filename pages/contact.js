import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';

const Contact = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.container}>
      <div className={styles.information_tate}>Contact</div>
      <div className={styles.title}>
        <img src="./decoration.svg" className={styles.decoration} />
        <h2>お問い合わせ</h2>
      </div>
      <p>
        企画参加のお申し込みやその他ご質問等あればこうがく祭実行委員会のメールにご連絡ください。
        <br />
        abc@gmail.com
        <br />
      </p>
    </div>
  </React.Fragment>
);

export default Contact;
