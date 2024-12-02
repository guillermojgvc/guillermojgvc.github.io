import { useContext } from "react";
import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
// CUSTOM
import { FormattedMessage } from "react-intl";
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {video && (
          <video className="bg-video" autoPlay loop muted poster={Poster}>
            <source
              src={require("../../public/img/video.mp4")}
              type="video/mp4"
            />
            <source
              src={require("../../public/img/video.mp4")}
              type="video/ogg"
            />
          </video>
        )}
        {leftImg && (
          <img
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : "img/leftimage-dark.jpg"}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
          <h3>
            <FormattedMessage id="home_grettings"
              defaultMessage="HI THERE1!" />
          </h3>
          <AnimationText />
          <p>
            <FormattedMessage id="home_short_desc"
              defaultMessage="I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design." />
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  <FormattedMessage id="home_btn_about"
                    defaultMessage="more about me" />

                </span>
              </a>
              {/* <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  <FormattedMessage id="home_btn_portfolio"
                    defaultMessage="portfolio" />
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
