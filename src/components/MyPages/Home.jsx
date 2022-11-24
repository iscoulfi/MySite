// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import getAge from '../../js/getAge';
import styles from './Home.module.css';

const Home = ({ changeLang, classesList, t }) => {
  // const [t, i18n] = useTranslation();
  // const [classesList, setClassesList] = useState('en');

  // const anotherLanguage = (language) => {
  //   i18n.changeLanguage(language);
  //   setClassesList(language);
  // };

  return (
    <div className={styles.main}>
      <h1>{t('name')}</h1>
      <h2>{t('job')}</h2>
      <h2>{`${getAge('10.08.1997')} ${t('age')}`}</h2>
      <img src="./images/DSCF0175.jpg" alt="MyPhoto" />
      <div class={styles.lang}>
        <p
          className={classesList === 'en' && 'active'}
          onClick={() => changeLang('en')}
        >
          ENG
        </p>
        <p>|</p>
        <p
          className={classesList === 'ru' && 'active'}
          onClick={() => changeLang('ru')}
        >
          RU
        </p>
      </div>
    </div>
  );
};

export default Home;
