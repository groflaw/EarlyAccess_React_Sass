import { useEffect, useState } from "react";
import logo from "../../assets/svgs/logo.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      window.pageYOffset > 0 ? setIsFixed(true) : setIsFixed(false);
    });
  }, []);

  return (
    <div className="header">
      <nav
        className={
          "navbar navbar-top navbar-expand-md navbar-light header__navbar " +
          (isFixed ? "navbar-top--scrolled" : "")
        }
      >
        <div className="container">
          <a className="navbar-brand header__logo" href="/">
            <img src={logo} className="header__logo__img" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTopCollapsible"
            aria-controls="navbarTopCollapsible"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTopCollapsible">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item active">
                <a
                  className="nav-link header__link"
                  href="https://www.instagram.com/crushmedia.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon sx={{ color: "#2e1c51" }} />
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link header__link"
                  href="https://www.linkedin.com/company/crushmediaind/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon sx={{ color: "#2e1c51" }} />
                </a>
              </li>
              {/* <li className="nav-item active">
                <a className="nav-link header__link" href="#header">
                  Sign in <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__link" href="#about">
                  Newsletter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__link" href="#work">
                  Referral
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__link" href="#contact">
                  About us
                </a>
              </li> */}
            </ul>
            <a
              type="button"
              className="navbar-brand header__contact"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=crushmedia.info@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
    // </header>
  );
}

export default Header;
