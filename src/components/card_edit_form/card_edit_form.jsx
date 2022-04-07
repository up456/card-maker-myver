import styles from './card_edit_form.module.css';
import React from 'react';
import Button from '../button/button';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, theme, title, email, message, fileName } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

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
      <select
        name="theme"
        value={theme}
        className={styles.select}
        onChange={onChange}
      >
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
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
