import styles from './card_preview.module.css';
import React from 'react';
import Card from '../card/card';

const CardPreview = ({ cards }) => {
  return (
    <article className={styles.cardPreview}>
      <h2 className={styles.contentTitle}>Card Preview</h2>
      <ul className={styles.previewList}>
        {Object.keys(cards).map((key) => {
          return <Card card={cards[key]} key={key} />;
        })}
      </ul>
    </article>
  );
};

export default CardPreview;
