import styles from './login_page.module.css';
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Login from '../login/login';

const LoginPage = ({ authService }) => {
  return (
    <section className={styles.loginBackgroundColor}>
      <div className={styles.loginContainer}>
        <Header />
        <Login authService={authService} />
        <Footer />
      </div>
    </section>
  );
};

export default LoginPage;
