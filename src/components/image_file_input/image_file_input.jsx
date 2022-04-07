import styles from './image_file_input.module.css';
import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';

const ImageFileInput = ({ name, onFileChange, imageUploader }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      {!loading && (
        <button
          onClick={onButtonClick}
          className={`${styles.button} ${name ? styles.onColor : ''}`}
        >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
      <input
        ref={inputRef}
        name="fileName"
        type="file"
        style={{ display: 'none' }}
        onChange={onChange}
      />
    </div>
  );
};

export default ImageFileInput;
