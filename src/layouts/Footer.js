const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a
          className="icon"
          href="https://www.linkedin.com/in/binuri-maleesha/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          className="icon"
          href="https://github.com/Binurim"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/binuri_/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          className="icon"
          href="https://www.pinterest.com/binurim_/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-pinterest" aria-hidden="true"></i>
        </a>
        <a
          className="icon"
          href="https://medium.com/@binurim"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-medium" aria-hidden="true"></i>
        </a>
      </div>

      {/* <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p> */}
    </footer>
  );
};

export default Footer;
