const Footer = () => {
  return (
    <footer className="footer mt-4 pt-4">
      <div className="d-flex gap-5">
        <a
          href="https://www.linkedin.com/in/binuri-maleesha/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/Binurim"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://medium.com/@binurim"
          target="_blank"
          rel="noreferrer"
          aria-label="Medium"
        >
          <i className="fa fa-medium" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/binuri_/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.youtube.com/@BinuriManorathna"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
      {/* <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p> */}
    </footer>
  );
};

export default Footer;
