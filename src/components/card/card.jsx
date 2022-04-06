import styles from './card.module.css';
import React from 'react';

const Card = ({ card }) => {
  const { id, name, company, theme, title, email, message, fileURL, fileName } =
    card;
  const url = fileURL || '/images/default_logo.png';

  return (
    <li className={`${styles.previewItem} ${selectColor(theme)}`}>
      <img className={styles.previeItemImage} src={url} alt="profileImage" />
      <div className={styles.previewItemDescription}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.etc}>{title}</p>
        <p className={styles.etc}>{email}</p>
        <p className={styles.message}>"{message}"</p>
      </div>
    </li>
  );
};

function selectColor(theme) {
  switch (theme) {
    case 'Dark':
      return styles.dark;
    case 'Light':
      return styles.light;
    case 'Colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme ${theme}`);
  }
}

export default Card;
