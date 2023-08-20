import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import brands
import paytm from "../../../assets/img/brands/paytm.png";
import primevideo from "../../../assets/img/brands/primevideo.png";
import cadbury from "../../../assets/img/brands/cadbury.png";
import disney from "../../../assets/img/brands/disney.png";
import netflix from "../../../assets/img/brands/netflix.png";
import amazon from "../../../assets/img/brands/amazon.png";
import myntra from "../../../assets/img/brands/myntra.png";

const BrandCarousel = () => {
  const [countItem, setCountItem] = useState(6);
  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function resizeHandler() {
    if (window.innerWidth > 1199) {
      setCountItem(6);
    } else if (window.innerWidth > 968) {
      setCountItem(5);
    } else if (window.innerWidth > 576) {
      setCountItem(4);
    } else {
      setCountItem(3);
    }
  }

  return (
    <>
      <h3 className="brand_title">Brand Collaboration</h3>
      <p className="brand_descripion">
        We're proud to collaborate with these top brands
      </p>
      <div className="container mt-3">
        <OwlCarousel
          loop={true}
          items={countItem}
          responsiveRefreshRate={0}
          autoplay={true}
          autoplayTimeout={3000}
          dots={false}
          margin={20}
        >
          <div className="item">
            <img src={paytm} alt="brand" className="brand_img" />
          </div>
          <div className="item">
            <img src={primevideo} alt="brand" className="brand_img" />
          </div>
          <div className="item">
            <img src={cadbury} alt="brand" className="brand_img" />
          </div>
          <div className="item">
            <img src={disney} alt="brand" className="brand_img" />
          </div>
          <div className="item">
            <img src={netflix} alt="brand" className="brand_img" />
          </div>
          <div className="item">
            <img src={amazon} alt="brand" className="brand_img" />
          </div>
          <div className="item">
            <img src={myntra} alt="brand" className="brand_img" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};
export default BrandCarousel;
