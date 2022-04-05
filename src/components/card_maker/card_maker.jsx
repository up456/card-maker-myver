import styles from './card_maker.module.css';

import React from 'react';

const CardMaker = ({ cards }) => {
  return (
    <article className={styles.cardMaker}>
      <h2 className={styles.contentTitle}>Card Maker</h2>
      {cards.map((card, index) => {
        return (
          <form key={index} className={styles.cardForm}>
            <div className={styles.firstLine}>
              <input
                type="text"
                placeholder="Name"
                value={card.name}
                className={styles.name}
              />
              <input
                type="text"
                placeholder="Company"
                value={card.company}
                className={styles.company}
              />
              <select name="Light" className={styles.light} value={card.light}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
              </select>
            </div>
            <div className={styles.secondLine}>
              <input
                type="text"
                placeholder="Title"
                value={card.title}
                className={styles.title}
              />
              <input
                type="text"
                placeholder="Email"
                value={card.email}
                className={styles.email}
              />
            </div>
            <div className={styles.thirdLine}>
              <textarea
                type="text"
                placeholder="Message"
                value={card.message}
                className={styles.message}
                rows="2"
              />
            </div>
            <div className={styles.lastLine}>
              <label htmlFor="input-file" className={styles.fileInputLabel}>
                No file
              </label>
              <input type="file" className={styles.fileInput} id="input-file" />
              <button className={styles.btn}>Delete</button>
            </div>
          </form>
        );
      })}
      <form className={styles.cardForm}>
        <div className={styles.firstLine}>
          <input type="text" placeholder="Name" className={styles.name} />
          <input type="text" placeholder="Company" className={styles.company} />
          <select name="light" className={styles.light}>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="Colorful">Colorful</option>
          </select>
        </div>
        <div className={styles.secondLine}>
          <input type="text" placeholder="Title" className={styles.title} />
          <input type="text" placeholder="Email" className={styles.email} />
        </div>
        <div className={styles.thirdLine}>
          <textarea
            type="text"
            placeholder="Message"
            className={styles.message}
            rows="2"
          />
        </div>
        <div className={styles.lastLine}>
          <label htmlFor="input-file" className={styles.fileInputLabel}>
            No file
          </label>
          <input type="file" className={styles.fileInput} id="input-file" />
          <button className={styles.btn}>Add</button>
        </div>
      </form>
    </article>
  );
};

export default CardMaker;
