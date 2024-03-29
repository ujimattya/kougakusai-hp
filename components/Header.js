import React from 'react';
import styles from '../styles/Header.module.scss';
import Link from 'next/link';

const Header = () => (
  <div className={styles.wrapper}>
    <input id="menu" type="checkbox" />
    <div className={styles.container}>
      <div className={styles.menu}>
        <img src="menuicon.svg" alt="" />
        <label className={styles.menu__button} htmlFor="menu" alt="メニュー">
          <div className={styles.menu__inner}></div>
          <img src="menu.svg" className={styles.menu__text} alt="メニュー" />
        </label>
      </div>
      <div className={styles.menu__btn}>
        <div className={styles.menu__home}>

        <Link href="/">
          <img src="home.svg" alt="TOPへ" />
        </Link>
        </div>
        {/* <div className={styles.menu__special}>
        <Link href="https://kougakusai-special.vercel.app/">
          <div>
          <img src="special.svg" alt="特設サイトへ" />
          <p>特設サイトへ</p>
          </div>
        </Link>
        </div> */}
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
          <div>

          <p className={styles.share__title}>FOLLOW US</p>
          <a href="https://twitter.com/2021kougakusai" target="_blank">
            <img src="./twitter.svg" alt="twitter" />
          </a>
          </div>
          {/* <Link href="https://kougakusai-special.vercel.app/">
          <div className={styles.share__special}>
            <img src="special.svg" alt="特設サイトへ" />
            <p>特設サイトへ</p>
          </div>
          </Link> */}
        </div>
      </nav>
    </div>
  </div>
);
export default Header;
