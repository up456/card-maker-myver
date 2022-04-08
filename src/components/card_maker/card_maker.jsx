import styles from './card_maker.module.css';

import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const CardMaker = ({ FileInput, cards, onAdd, updateCard, deleteCard }) => {
  return (
    <article className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      {Object.keys(cards).map((key) => {
        return (
          <CardEditForm
            card={cards[key]}
            key={key}
            updateCard={updateCard}
            deleteCard={deleteCard}
            FileInput={FileInput}
          />
        );
      })}
      <CardAddForm FileInput={FileInput} onAdd={onAdd} />
    </article>
  );
};

export default CardMaker;
