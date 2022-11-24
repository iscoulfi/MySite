import styles from './Contacts.module.css';

const Contacts = ({ t }) => {
  return (
    <div className={styles.main}>
      <h1>{t('Get In Touch')}</h1>
      <a className={styles.btn} href="mailto:iscoulfi@gmail.com">
        {t('CONTACT ME')}
      </a>
      <div className={styles.flexContacts}>
        <div>
          <a href="https://www.linkedin.com/in/konstantin-ulanov-952072258/">
            <img src="./images/linkedin-w.png" alt="LinkedIn" />
          </a>
          <p>LinkedIn</p>
        </div>
        <div>
          <a href="https://github.com/iscoulfi">
            <img src="./images/github-w.png" alt="GitHub" />
          </a>
          <p>GitHub</p>
        </div>
        <div>
          <a href="/">
            <img src="./images/website-w.png" alt="Website" />
          </a>
          <p>Website</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
