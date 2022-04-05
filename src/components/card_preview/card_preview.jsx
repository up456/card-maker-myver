import styles from './card_preview.module.css';
import React from 'react';
import defaultImage from './default_logo.png';

const CardPreview = ({ cards }) => {
  return (
    <article className={styles.cardPreview}>
      <h2 className={styles.contentTitle}>Card Preview</h2>
      <ul className={styles.previewList}>
        {cards.map((card, index) => {
          return (
            <li key={index} className={styles.previewItem}>
              <img
                className={styles.previeItemImage}
                src={defaultImage}
                alt="profileImage"
              />
              <div className={styles.previewItemDescription}>
                <div className={styles.name}>{card.name}</div>
                <div className={styles.company}>{card.company}</div>
                <div className={styles.line}></div>
                <div className={styles.etc}>{card.title}</div>
                <div className={styles.etc}>{card.email}</div>
                <div className={styles.message}>"{card.message}"</div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default CardPreview;
