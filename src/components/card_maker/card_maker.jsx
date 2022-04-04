import styles from './card_maker.module.css';

import React from 'react';

const CardMaker = (props) => {
  return (
    <article className={styles.cardMaker}>
      <h2 className={styles.contentTitle}>Card Maker</h2>
    </article>
  );
};

export default CardMaker;
