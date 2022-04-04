import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate({
      pathname: '/maker',
      state: { id: userId },
    });
  };
  const handleOnLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => {
        goToMaker(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={handleOnLogin}>
            Google
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={handleOnLogin}>
            Github
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
