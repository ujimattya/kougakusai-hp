import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import Footer from '../components/Footer';
import Link from 'next/link';

const Policy = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.title}>
      <img src="./decoration.svg" className={styles.decoration} />
      <h2>サイトポリシー</h2>
    </div>
    <div className={styles.side}>
      <div className={styles.side__title}>Policy</div>
    </div>
    <div className={styles.container}>
      <div className={styles.information__tate}>Policy</div>
      <p>
        このウェブサイトは、茨城大学こうがく祭の公式ホームページ（以下「本サイト」）です。
        <br />
        <br />
        本サイトは、こうがく祭実行委員会（以下「当委員会」）が作成・管理しています。ご質問やご意見などがありましたら、
        <Link href="/policy">
          <a>「お問い合わせ」</a>
        </Link>
        のページ よりお気軽にご連絡ください。
        <br />
        <br />
        なお、サイトポリシーの内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
      </p>
      <h2>免責事項</h2>
      <p>
        本サイトに情報を掲載するにあたっては細心の注意を払っていますが、情報の正確性および完全性を保証するものではありません。
        <br />
        <br />
        本サイトに掲載されている情報を予告なしに変更する場合があります。
        <br />
        <br />
        本サイトに掲載されている情報を利用したことで生じた損失に関して、当委員会は一切の責任を負いません。
      </p>
      <h2>著作権</h2>
      <p>
        本サイトに掲載されているコンテンツなどは、当委員会または出展企画が著作権を有しており、著作権法によって認められる場合を除き、著作権者の許可なくこれらを利用することはできません。
      </p>
      <h2>動作環境</h2>
      <p>
        本サイトは、Microsoft Edge・Google Chrome・Safari・Mozilla
        Firefoxの最新版で動作することを確認しています。お使いのブラウザやOSによっては、見え方が異なったり、正常に動作しなかったりする可能性があります。
      </p>
      <h2>リンク</h2>
      <p>
        本サイトへのリンクは、当委員会の許可を得ずに掲載することができます。当委員会への事後の通知も不要です。
        <br />
        ほかのホームページのフレーム内に本サイトのページを表示することは禁止します。
      </p>
    </div>
    <Footer />
  </React.Fragment>
);

export default Policy;
