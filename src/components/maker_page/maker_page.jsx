import styles from './maker_page.module.css';
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';

const Maker_page = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
    navigate('/');
  };

  const [cards, setCards] = useState([
    {
      name: '용석',
      company: '카카오',
      light: 'Dark',
      title: '프론트엔드',
      email: '4up456@naver.com',
      message: '안녕하세요. 존잘남 박용석입니다.',
      image: '/public/images/default_logo.png',
    },
    {
      name: '트위치',
      company: '라이엇',
      light: 'Dark',
      title: '원거리 암살자',
      email: 'tiwitch@naver.com',
      message: '깜짝 놀랬징?',
      image: '/public/images/default_logo.png',
    },
    {
      name: '아이유',
      company: '로엔',
      light: 'Colorful',
      title: '아이돌 여가수',
      email: 'iu@naver.com',
      message: '존예 여가수~!',
      image: '/public/images/default_logo.png',
    },
  ]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.makerBackground}>
      <section className={styles.makerPage}>
        <Header onLogout={onLogout} />
        <section className={styles.makerContents}>
          <CardMaker cards={cards} />
          <CardPreview cards={cards} />
        </section>
        <Footer />
      </section>
    </section>
  );
};

export default Maker_page;
