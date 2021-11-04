import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/New.module.scss';
import Link from 'next/link';
import Footer from '../components/Footer';
import Image from 'next/image'

const Home = () => (
  <React.Fragment>
    <div className={styles.container}>
      <div className={styles.head}></div>
        <div className={styles.flex}>
          <Image
          src="/sai.png"
          alt="こうがく祭イメージキャラクター"
          width={300}
          height={300}
          />
          <div className={styles.description}>
            <h2 className={styles.pre}>こうがく祭ホームページの場所が変更になりました。</h2>
            <h2>2021年度以降のこうがく祭ホームページは
            <a href="https://kougakusai.github.io/kougakusai-hp">
              こちら
            </a>になります。</h2>
          </div>
        </div>
    </div>
  </React.Fragment>
);

export default Home;
