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
      id: '1',
      name: '용석',
      company: '카카오',
      theme: 'Dark',
      title: '프론트엔드',
      email: '4up456@naver.com',
      message: '안녕하세요. 존잘남 박용석입니다.',
      fileURL: '/images/logo.png',
      fileName: 'default',
    },
    {
      id: '2',
      name: '트위치',
      company: '라이엇',
      theme: 'Light',
      title: '원거리 암살자',
      email: 'tiwitch@naver.com',
      message: '깜짝 놀랬징?',
      imageURL: null,
      imageName: 'default',
    },
    {
      id: '3',
      name: '아이유',
      company: '로엔',
      theme: 'Colorful',
      title: '아이돌 여가수',
      email: 'iu@naver.com',
      message: '존예 여가수~!',
      imageURL: null,
      imageName: 'default',
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
