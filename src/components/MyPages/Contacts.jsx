const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Get In Touch</h1>
      <a className="btn" href="mailto:iscoulfi@gmail.com">
        CONTACT ME
      </a>
      <div className="flex-contacts">
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
