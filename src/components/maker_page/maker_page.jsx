import styles from './maker_page.module.css';
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';

const Maker_page = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
    navigate('/');
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.makerBackground}>
      <section className={styles.makerPage}>
        <Header onLogout={onLogout} />
        <section className={styles.makerContents}>
          <CardMaker />
          <CardPreview />
        </section>
        <Footer />
      </section>
    </section>
  );
};

export default Maker_page;
