import styles from './maker_page.module.css';
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react/cjs/react.development';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';

const Maker_page = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const navigaetState = navigate?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigaetState && navigaetState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService, userId, navigate]);

  const createOrUpdateCard = (card) => {
    setCards((prevCards) => {
      const updated = { ...prevCards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((prevCards) => {
      const updated = { ...prevCards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker
          cards={cards}
          onAdd={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker_page;
