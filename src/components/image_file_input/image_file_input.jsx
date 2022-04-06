import styles from './image_file_input.module.css';
import React from 'react';

const ImageFileInput = ({ fileName }) => (
  <button className={styles.button}>{fileName}</button>
);

export default ImageFileInput;
