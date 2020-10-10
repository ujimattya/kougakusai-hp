import React from 'react';
import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div></div>
        <div className={styles.footer__menuList}>
          <div className={styles.share}>
            <p className={styles.share__title}>FLLOW US</p>
            <a href="https://twitter.com/2020kougakusai" target="_blank">
              <img src="./twitter.svg" alt="twitter" />
            </a>
          </div>
          <nav className={styles.footer__nav}>
            <ul>
              <li className={styles.menuList__link}>
                <Link href="/">
                  <a>トップページ</a>
                </Link>
              </li>
              <li className={styles.menuList__link}>
                <Link href="/about">
                  <a>オンライン開催について</a>
                </Link>
              </li>
              <li className={styles.menuList__link}>
                <Link href="/company">
                  <a>協賛企業一覧</a>
                </Link>
              </li>
              <li className={styles.menuList__link}>
                <Link href="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
              <li className={styles.menuList__link}>
                <Link href="/policy">
                  <a>サイトポリシー</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
