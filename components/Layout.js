import React from 'react';
import styles from '../styles/Layout.module.scss';
import Header from './Header';
import Day from './Day';
import Head from 'next/head';

const Layout = ({ children }) => (
  <React.Fragment>
    <Day />

    {children}
    <Header />
  </React.Fragment>
);
export default Layout;
