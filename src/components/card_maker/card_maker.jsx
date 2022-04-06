import styles from './card_maker.module.css';

import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';

const CardMaker = ({ cards }) => {
  return (
    <article className={styles.cardMaker}>
      <h2 className={styles.contentTitle}>Card Maker</h2>
      {cards.map((card) => {
        return <CardEditForm card={card} key={card.id} />;
      })}
    </article>
  );
};

export default CardMaker;
