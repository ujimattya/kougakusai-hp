import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import Footer from '../components/Footer';
import Link from "next/link"

const About = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.title}>
      <img src="./decoration.svg" className={styles.decoration} />
      <h2>NotFound</h2>
    </div>
    <div className={styles.side}>
      <div className={styles.side__title}>404　　</div>
    </div>
    <div className={styles.container}>
      <div className={styles.information__tate}>NotFound</div>

      <h2>404 NotFound</h2>
      <p>ページが存在しません。URLが間違っている可能性があります。</p>
      <Link href="/">

      <a>
        トップページへ
      </a>
      </Link>
    </div>
    <Footer />
  </React.Fragment>
);

export default About;
