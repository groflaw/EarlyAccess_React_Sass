import footerLogo from "../../assets/svgs/footer-logo.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(props) {
  return (
    <div className="container">
      <footer className="row footer justify-content-center d-flex align-items-center">
        <div className="footer__links_box">
          <img src={footerLogo} className="footer_logo" alt="footer_logo" />
          <div className="footer__links mt-3">
            <a
              href="https://www.linkedin.com/company/crushmediaind/?viewAsMember=true"
              target="_blank"
              className="mr-5"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ color: "white" }} />
            </a>
            <a
              href="https://www.instagram.com/crushmedia.in/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon sx={{ color: "white" }} />
            </a>
          </div>
        </div>
      </footer>
      <div className="row footer__text d-flex justify-content-center">
        It's not Viral, it's &nbsp; <b>Crush</b>
      </div>
    </div>
  );
}

export default Footer;
