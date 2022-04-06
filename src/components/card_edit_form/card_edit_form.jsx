import styles from './card_edit_form.module.css';
import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const { id, name, company, theme, title, email, message, fileURL, fileName } =
    card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input type="text" name="name" className={styles.input} value={name} />
      <input
        type="text"
        name="company"
        className={styles.input}
        value={company}
      />
      <select name="theme" className={styles.select}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input type="text" name="title" className={styles.input} value={title} />
      <input type="text" name="email" className={styles.input} value={email} />
      <textarea
        name="message"
        className={styles.textarea}
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName} />
      </div>
      <Button name="delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
