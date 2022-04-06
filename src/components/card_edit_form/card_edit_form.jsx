import styles from './card_edit_form.module.css';
import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { id, name, company, theme, title, email, message, fileURL, fileName } =
    card;
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <input
        type="text"
        name="name"
        className={styles.input}
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        name="company"
        className={styles.input}
        value={company}
        onChange={onChange}
      />
      <select name="theme" className={styles.select} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        type="text"
        name="title"
        className={styles.input}
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        className={styles.input}
        value={email}
        onChange={onChange}
      />
      <textarea
        name="message"
        className={styles.textarea}
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName} />
      </div>
      <Button name="delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
