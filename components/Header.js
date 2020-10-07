import React from 'react';
import styles from '../styles/Header.module.scss';
import Link from 'next/link';

const Header = () => (
  <div className={styles.wrapper}>
    <input id="menu" type="checkbox" />
    <div className={styles.container}>
      <div className={styles.menu}>
        <img src="menuicon.svg" />
        <label className={styles.menu__button} htmlFor="menu">
          <div className={styles.menu__inner}></div>
          <img src="menu.png" className={styles.menu__text} />
        </label>
      </div>
    </div>
    <div className={styles.navWrap}>
      <Link href="/">
        <a>
          <img src="./logo_white.svg" className={styles.logo} alt="こうがく祭" />
        </a>
      </Link>
      <nav className={styles.menuList}>
        <ul className={styles.menuList__wrapper}>
          <li>
            <Link href="/">
              <a className={styles.menuList__link}>トップページ</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.menuList__link}>オンライン開催について</a>
            </Link>
          </li>
          <li>
            <Link href="/company">
              <a className={styles.menuList__link}>協賛企業一覧</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.menuList__link}>お問い合わせ</a>
            </Link>
          </li>
        </ul>
        <div className={styles.share}>
          <p className={styles.share__title}>SHARE</p>
          <a href="https://twitter.com/2020kougakusai" target="_blank">
            <img src="./twitter.svg" />
          </a>
        </div>
      </nav>
    </div>
  </div>
);
export default Header;
