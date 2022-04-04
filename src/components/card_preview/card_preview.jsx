import styles from './card_preview.module.css';

import React from 'react';

const CardPreview = (props) => {
  return (
    <article className={styles.cardPreview}>
      <h2 className={styles.contentTitle}>Card Preview</h2>
    </article>
  );
};

export default CardPreview;
