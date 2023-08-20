import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import cards
// import cardImg1 from "../../../assets/img/card/1.png";
// import cardImg2 from "../../../assets/img/card/2.png";
// import cardImg3 from "../../../assets/img/card/3.png";
import cardImg4 from "../../../assets/img/card/4.png";
import cardImg5 from "../../../assets/img/card/5.png";
import cardImg6 from "../../../assets/img/card/6.png";
import cardImg7 from "../../../assets/img/card/7.png";
import cardImg8 from "../../../assets/img/card/8.png";
import youtubeIcon from "../../../assets/svgs/card_youtube.svg";
import instagramIcon from "../../../assets/svgs/card_instagram.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Community = () => {
  const [countItem, setCountItem] = useState(8);
  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function resizeHandler() {
    if (window.innerWidth > 1700) {
      setCountItem(5);
    } else if (window.innerWidth > 1200) {
      setCountItem(4);
    } else if (window.innerWidth > 968) {
      setCountItem(3);
    } else if (window.innerWidth > 576) {
      setCountItem(2);
    } else {
      setCountItem(1);
    }
  }

  return (
    <>
      <h2 className="community_header">
        Top
        <span style={{ color: "#ffbb0e" }}> Influencers </span>
        in our Community
      </h2>
      <p className="community_content">
        Rather than reaching out to them by yourself, get access to the best
        Influencers - the new celebrities in your field at <b>Crush</b>
      </p>
      <div className="container mt-3">
        {/* <div className="row justify-content-center"> */}
        {/* <div className="col-12"> */}
        <OwlCarousel
          loop={false}
          items={countItem}
          responsiveRefreshRate={0}
          autoplay={false}
          autoplayTimeout={3000}
          dots={false}
          margin={20}
        >
          {/* <div className="col-10 col-sm-7 col-md-6 col-lg-4 item"> */}
          {/* <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg1}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>878K </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>867K </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">3.03%</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* </div> */}
          {/* <div className="col-10 col-sm-7 col-md-6 col-lg-4 item"> */}
          {/* <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg2}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>1.4M </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>- </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">1.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* </div> */}
          {/* <div className="col-10 col-sm-7 col-md-6 col-lg-4 item"> */}
          {/* <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg3}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>799K </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>34.2K </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg4}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>2.1M </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>2.1M </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg5}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>1.1M </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>1.1M </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg6}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>991K </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>991K </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg7}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>614K </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>614K </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="community_card">
              <div className="community_card_top">
                <img
                  src={cardImg8}
                  alt="card_img"
                  className="community_card_img"
                />
                <div className="community_card_box">
                  <p className="community_card_title">Shivesh Bhatia</p>
                  <p className="community_card_status">Available</p>
                </div>
              </div>
              <div className="community_card_bottom">
                <div className="community_card_category">Food</div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={instagramIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>269K </b>Followers
                      </span>
                    </div>
                    <div className="d-flex align-items-center community_card_sub">
                      <img
                        src={youtubeIcon}
                        alt="instagram_icon"
                        className="community_card_icon"
                      />
                      <span className="community_card_content">
                        <b>269K </b>Subscribers
                      </span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span className="community_card_er">Er:&nbsp;</span>
                    <span className="community_card_count">2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </OwlCarousel>
        {/* </div> */}
        {/* </div> */}
      </div>{" "}
      <div className="row">
        <div className="col-12 justify-content-center">
          <div className="community_joinButton">
            <a href="#earlyAccess" rel="noreferrer" type="button">
              Join the community&nbsp;
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
