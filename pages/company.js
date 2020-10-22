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
      <h2>ご協賛いただいた企業一覧（敬称略・順不同）</h2>
      <br />
      <br />
      <ul>
        <li>イガラシ綜業株式会社</li>
        <li>株式会社日立産業制御ソリューションズ</li>
        <li>株式会社ユニキャスト</li>
        <li>アイ・イー・シー株式会社</li>
        <li>中央管財株式会社</li>
        <li>日立サンライズエステート株式会社</li>
        <li>株式会社日立タイヤ（タイヤガーデン日立タイヤ）</li>
        <li>モモタ電気サービス</li>
        <li>よしだ写真館</li>
        <li>放課後子ども教室 Kusu Kusu</li>
        <li>株式会社アドフォード</li>
        <li>小野不動産</li>
        <li>日立市　鵜未来の湯　十王</li>
        <li>有限会社エイトプランニングオフィス　エイトスタジオ</li>
        <li>株式会社菓匠たけだ</li>
        <li>サイクルショップイマイ</li>
        <li>社会医療法人愛宣会ひたち医療センター</li>
        <li>日立ユニオンデンタル株式会社</li>
      </ul>
    </div>
    <Footer />
  </React.Fragment>
);

export default Company;
