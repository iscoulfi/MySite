import styles from './Skills.module.css';

const Skills = ({ t }) => {
  return (
    <div className={styles.main}>
      <h1>{t('I work with')}</h1>
      <div className={styles.skillsRow}>
        <div>
          <img src="./images/html-w.png" alt="" />
          <p>HTML</p>
        </div>
        <div>
          <img src="./images/css-w.png" alt="" />
          <p>CSS</p>
        </div>
        <div>
          <img src="./images/js.png" alt="" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src="./images/react.png" alt="" />
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
