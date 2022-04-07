import styles from './card_add_form.module.css';
import React from 'react';
import Button from '../button/button';
import { useRef, useState } from 'react/cjs/react.development';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({ fileName: null, fuleURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fuleURL: null });
    onAdd(newCard);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        className={styles.input}
        placeholder="Name"
      />
      <input
        ref={companyRef}
        type="text"
        name="company"
        className={styles.input}
        placeholder="Company"
      />
      <select ref={themeRef} name="theme" className={styles.select}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        name="title"
        className={styles.input}
        placeholder="Title"
      />
      <input
        ref={emailRef}
        type="text"
        name="email"
        className={styles.input}
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        name="message"
        className={styles.textarea}
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
