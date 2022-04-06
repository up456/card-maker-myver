import styles from './header.module.css';
import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <img className={styles.logoImage} src="/images/logo.png" alt="사진" />
        {onLogout && (
          <div className={styles.logoutBtn} onClick={onLogout}>
            logout
          </div>
        )}
      </div>
      <div className={styles.headerTitle}>Business Card Maker</div>
    </header>
  );
};

export default Header;
