import styles from './header.module.css';
import React from 'react';
import logoImage from '../../images/logo.png';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <img className={styles.logoImage} src={logoImage} alt="사진" />
        <div className={styles.logoutBtn}>logout</div>
      </div>
      <div className={styles.headerTitle}>Business Card Maker</div>
    </header>
  );
};

export default Header;
