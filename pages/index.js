import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/index.module.scss';
import Link from 'next/link';
import Footer from '../components/Footer';

const Home = () => (
  <React.Fragment>
    <Layout></Layout>
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1>
          <img src="./title.png" className={styles.title} alt="こうがく祭" />
        </h1>
      </div>
      {/* <div className={styles.wrap}>
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
      </div> */}
      <div className={styles.contents__wrapper}>
        <div className={styles.contents}>
          <div className={styles.about}>
            <h2>こうがく祭とは</h2>
            <p>こうがく祭は毎年11月に開催される茨城大学工学部の学園祭です。</p>
            <p>
              工学部ならではの企画や研究室公開などがあり、毎年一般の方や学生の方含め多くの方にご来場していただいております。
            </p>
            <br />
            <p>
              今年度はオンラインでの開催となりました。詳しくは
              <Link href="/about">
                <a>オンライン開催について</a>
              </Link>
              をご覧ください
            </p>
          </div>
          <div className={styles.new}>
            <h2>お知らせ</h2>


            <div>
            <p className={styles.new__date}>12月14日</p>
            <p className={styles.new__description}>特設サイトの公開を終了しました。</p>
            </div>
            <div>
            <p className={styles.new__date}>11月07日</p>
            <p className={styles.new__description}>こうがく祭オンライン開催が終了しました。</p>

            </div>
            <div>

            <p className={styles.new__date}>10月26日</p>
            <p className={styles.new__description}>HP・特設サイトを公開しました。</p>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </React.Fragment>
);

export default Home;
