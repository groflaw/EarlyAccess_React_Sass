import ArrowForward from "@mui/icons-material/ArrowForwardIos";
import ArrowBack from "@mui/icons-material/ArrowBackIos";

import avatar1 from "../../../assets/img/avatar/avatar4.png";
import avatar2 from "../../../assets/img/avatar/avatar1.png";
import avatar3 from "../../../assets/img/avatar/avatar6.png";

const About = () => {
  return (
    <>
      <h2 className="about_header">
        What influencers say about{" "}
        <span style={{ color: "#f1571a" }}>Crush Media</span>?
      </h2>
      <div className="container">
        <div
          id="about_carousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="3000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#about_carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#about_carousel" data-slide-to="1"></li>
            <li data-target="#about_carousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner about_carousel" role="listbox">
            <div className="carousel-item active about_carousel_item">
              <img
                src={avatar1}
                alt="avatar1"
                className="about_carousel_avatar"
              />
              <div className="about_carousel_name">Jewel Hickle</div>
              <p className="about_carousel_pro">Direct Research Officer</p>
              <p className="about_carousel_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ipsam saepe sapiente, dignissimos accusantium repellendus,
                consequatur recusandae dolore aperiam laboriosam ut
                necessitatibus dolorem fuga porro facere in eligendi omnis
                maiores?
              </p>
            </div>
            <div className="carousel-item about_carousel_item">
              <img
                src={avatar2}
                alt="avatar1"
                className="about_carousel_avatar"
              />
              <div className="about_carousel_name">Jewel Hickle</div>
              <p className="about_carousel_pro">Direct Research Officer</p>
              <p className="about_carousel_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ipsam saepe sapiente, dignissimos accusantium repellendus,
                consequatur recusandae dolore aperiam laboriosam ut
                necessitatibus dolorem fuga porro facere in eligendi omnis
                maiores?
              </p>
            </div>
            <div className="carousel-item about_carousel_item">
              <img
                src={avatar3}
                alt="avatar1"
                className="about_carousel_avatar"
              />
              <div className="about_carousel_name">Jewel Hickle</div>
              <p className="about_carousel_pro">Direct Research Officer</p>
              <p className="about_carousel_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ipsam saepe sapiente, dignissimos accusantium repellendus,
                consequatur recusandae dolore aperiam laboriosam ut
                necessitatibus dolorem fuga porro facere in eligendi omnis
                maiores?
              </p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#about_carousel"
            role="button"
            data-slide="prev"
          >
            <ArrowBack color="primary" />
          </a>
          <a
            className="carousel-control-next"
            href="#about_carousel"
            role="button"
            data-slide="next"
          >
            <ArrowForward color="primary" />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
