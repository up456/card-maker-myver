import styles from './login_page.module.css';
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Login from '../login/login';

const LoginPage = (props) => {
  return (
    <div className={styles.loginBackgroundColor}>
      <div className={styles.loginContainer}>
        <Header />
        <Login />
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
