import styles from './AboutMe.module.css';

const AboutMe = ({ t }) => {
  return (
    <div className={styles.main}>
      <h2> {t("I'm Konstantin - entry level web developer.")}</h2>
      <h2>
        {t(
          'I studied «Design and Engineering of Electronic Equipment» at the SPbSUT.'
        )}
      </h2>
      <h2>
        {t(
          'Able to work well as part of a professional computer program development team.'
        )}
      </h2>
    </div>
  );
};

export default AboutMe;
