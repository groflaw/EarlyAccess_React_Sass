import { useState } from "react";

import axios from "axios";

import bgDash from "../../../assets/img/bg_dash.png";
import graph from "../../../assets/img/graph.png";
import profileAvatar from "../../../assets/img/avatar/avatar1.png";
import tlAvatar from "../../../assets/img/avatar/avatar2.png";
import tAvatar from "../../../assets/img/avatar/avatar3.png";
import lAvatar from "../../../assets/img/avatar/avatar4.png";
import blAvatar from "../../../assets/img/avatar/avatar5.png";
import bAvatar from "../../../assets/img/avatar/avatar6.png";
import brAvatar from "../../../assets/img/avatar/avatar7.png";
import rAvatar from "../../../assets/img/avatar/avatar8.png";

import youtubeIcon from "../../../assets/svgs/card_youtube.svg";
import instagramIcon from "../../../assets/svgs/card_instagram.svg";

import MapsUgcOutlined from "@mui/icons-material/MapsUgcOutlined";
import SlowMotionVideo from "@mui/icons-material/SlowMotionVideo";

const Dash = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/email", email)
      .then((res) => {
        return console.log(res.data);
      })
      .catch((err) => {
        return console.log(err.response.data);
      });
  };
  return (
    <>
      <div className="col-12 col-lg-6 dash__left">
        <h2 className="dash__left_header">
          Discover, collaborate and amplify the next generation of Influencers
        </h2>
        <p className="dash__left_content">
          Its time to get social! Now collaborate with all the best influencers
          and brands in one place.
        </p>
        <div className="dash__left_form">
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="dash__left_form_input"
          />
          <input
            type="button"
            value="Get Early Access"
            className="d_button dash__left_form_button"
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div className="col-12 col-lg-6 dash__right">
        <div className="row main_card">
          <div className="col-12 col-md-8 col-lg-8 main_card_left">
            <div className="row justify-content-center">
              <div className="col-4 p-1">
                <div className="small_card">
                  <img
                    src={youtubeIcon}
                    alt="small_card_img"
                    className="small_card_img"
                  />
                  <div className="small_card_text" style={{ color: "#27b4f4" }}>
                    <p className="small_card_toptext">640K</p>
                    <p className="small_card_bottomtext">+13.4%(3014)</p>
                  </div>
                </div>
              </div>
              <div className="col-4 p-1">
                <div className="small_card">
                  <img
                    src={instagramIcon}
                    alt="small_card_img"
                    className="small_card_img"
                  />
                  <div className="small_card_text" style={{ color: "#f1571a" }}>
                    <p className="small_card_toptext">877K</p>
                    <p className="small_card_bottomtext">+11.6%(2817)</p>
                  </div>
                </div>
              </div>
              <div className="col-4 p-1">
                <div className="small_card">
                  <div>
                    <p className="small_card_title">TOTAL VIEWS</p>
                    <p className="small_card_currency">1.1B</p>
                    <p className="small_card_content">Past Week +13.2% (10M)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center p-1">
              <div className="stastic_card row">
                <div className="col-7">
                  <div className="follow">
                    <p className="follow_title">followers growth</p>
                    <p className="follow_period">Mar 20 - Apr 20</p>
                    <img src={graph} alt="graph" className="follow_graph" />
                  </div>
                </div>
                <div className="col-5">
                  <div className="overview">
                    <p className="overview_title">overview</p>
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <p className="overview_content_title">
                          Total Unique Users
                        </p>
                        <p className="overview_content_number">20.3K</p>
                      </div>
                      <div className="col-6">
                        <p className="overview_content_title">
                          New Unique Users
                        </p>
                        <p className="overview_content_number">753</p>
                      </div>
                      <div className="col-6">
                        <p className="overview_content_title">
                          Engagement Rate
                        </p>
                        <p className="overview_content_number">8.3%</p>
                      </div>
                      <div className="col-6">
                        <p className="overview_content_title">Total Comments</p>
                        <p className="overview_content_number">180K</p>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <input
                        type="button"
                        value="Full Report"
                        className="d_button overview_btn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 main_card_right p-1">
            <div className="profile_card">
              <p className="profile_card_title">Profile</p>
              <div className="profile">
                <div className="row p-">
                  <div className="col-3 col-md-12 d-flex">
                    <img
                      src={profileAvatar}
                      alt="profile_avatar"
                      className="profile_avatar"
                    />
                  </div>
                  <div className="col-5 col-md-12">
                    <p className="profile_name">Richi Shah</p>
                    <p className="profile_pro">Travel & Lifestyle</p>
                    <p className="profile_summary">
                      I am Richi Shah, I create content 📸 on Travel and O.
                      IOexploring the world through my eyes. 🌍
                    </p>
                  </div>
                  <div className="col-4 col-md-12 profile_activities">
                    <p className="profile_activities_title">
                      Recent Activities
                    </p>
                    <div className="activity">
                      <div className="activity_icon">
                        <SlowMotionVideo sx={{fontSize: 16}} />
                      </div>
                      <p className="activity_content">
                        Posted a video on Instagram, Youtube
                      </p>
                      <p className="activity_time">13:15</p>
                    </div>
                    <div className="activity">
                      <div className="activity_icon">
                        <MapsUgcOutlined sx={{fontSize: 16}} />
                      </div>
                      <p className="activity_content">
                        Posted a video on Instagram, Youtube
                      </p>
                      <p className="activity_time">13:15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={tlAvatar} alt="top_left_image" className="abs_img tl_img" />
          <img src={tAvatar} alt="top_image" className="abs_img t_img" />
          <img src={rAvatar} alt="top_image" className="abs_img r_img" />
          <img src={lAvatar} alt="top_image" className="abs_img l_img" />
          <img src={blAvatar} alt="top_image" className="abs_img bl_img" />
          <img src={brAvatar} alt="top_image" className="abs_img br_img" />
          <img src={bAvatar} alt="top_image" className="abs_img b_img" />
          <img src={bgDash} alt="bg_dash" className="bg_dash" />
        </div>
      </div>
    </>
  );
};

export default Dash;
