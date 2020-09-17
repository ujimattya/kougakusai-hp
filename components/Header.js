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
          <Link href="">
            <a className={styles.menuList__link}>協賛企業一覧</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className={styles.menuList__link}>お問い合わせ</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
export default Header;
