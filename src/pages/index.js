import Dash from "../components/partials/home/Dash";
import BrandCarousel from "../components/partials/home/BrandCarousel";
// import FAQ from "../components/partials/home/FAQ";
import Community from "../components/partials/home/Community";
// import About from "../components/partials/home/About";
import FreeAccess from "../components/partials/home/FreeAccess";

function Index() {
  return (
    <div className="container">
      <div className="row justify-content-center dash">
        <Dash />
      </div>
      <div className="row justify-content-center brand">
        <BrandCarousel />
      </div>
      <div className="row justify-content-center community">
        <Community />
      </div>
      <div className="row justify-content-center question">
        <h2 className="col-12 question_subcontainer_header">
          Need to know something about Crush? Hit us up here and let's get
          started!
        </h2>
        <a
          className="d_button question_subcontainer_button"
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=crushmedia.info@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Contact Us
        </a>
      </div>
      {/* <div className="row justify-content-center about">
        <About />
      </div> */}
      {/* <div className="row justify-content-center faqs">
        <FAQ />
      </div> */}
      <div className="row justify-content-center freeaccess">
        <FreeAccess />
      </div>
    </div>
  );
}

export default Index;
