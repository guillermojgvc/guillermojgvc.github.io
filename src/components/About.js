import { useContext, useState } from "react";
import NavContext from "../context/navContext";
// CUSTOM
import { FormattedMessage, FormattedDate, useIntl } from "react-intl";
import info_en from "../../info/cv_en.json";
import info_es from "../../info/cv_es.json";

const About = () => {
  const intl = useIntl();
  const { nav } = useContext(NavContext);
  const [language, setLanguage] = useState(intl.formatMessage({ id: 'current' }));

  const personalInfo = {
    'en': info_en,
    'es': info_es,
  }

  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          <span>
            <FormattedMessage id="about_title"
              defaultMessage="resume" />
          </span>
        </h2>
        <span className="title-head-subtitle">
          <FormattedMessage id="about_subtitle"
            defaultMessage="I work as software developer since 2013, and I love what I do." />
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              <FormattedMessage id="about_short_info"
                defaultMessage="I'm a FullStack and GIS Developer based in Quito, Ecuador.  I strives to build immersive and beautiful applications through carefully crafted clean code and user-centric design." />
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_first_name"
                        defaultMessage="First Name" />
                    </span>
                    <FormattedMessage id="info_first_name"
                      defaultMessage="" />
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_last_name"
                        defaultMessage="Last Name" />
                    </span>
                    <FormattedMessage id="info_last_name"
                      defaultMessage="" />
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_birthdate"
                        defaultMessage="Birthdate" />
                    </span>
                    <FormattedMessage id="info_birthdate"
                      defaultMessage="" />
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_nationality"
                        defaultMessage="Nationality" />
                    </span>
                    <FormattedMessage id="info_nationality"
                      defaultMessage="" />
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_address"
                        defaultMessage="Address" />
                    </span>
                    <FormattedMessage id="info_address"
                      defaultMessage="" />
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                {/* <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_age"
                        defaultMessage="" />
                    </span>
                    <FormattedMessage id="info_experience"
                      defaultMessage=""
                      values={{
                        year: Math.floor((new Date() - new Date(intl.formatMessage({ id: 'info_birthdate' })).getTime()) / 3.15576e+10)
                      }}
                    />
                  </h6>
                </li> */}
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_experience"
                        defaultMessage="Experience" />
                    </span>
                    <FormattedMessage id="info_experience"
                      defaultMessage=""
                      values={{
                        year: new Date().getFullYear() - intl.formatMessage({ id: 'info_since_year' })
                      }}
                    />

                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_languages"
                        defaultMessage="Languages" />
                    </span>
                    <FormattedMessage id="info_languages"
                      defaultMessage="" />
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_phone"
                        defaultMessage="Phone" />
                    </span>
                    <FormattedMessage id="info_phone"
                      defaultMessage="" />
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="about_email"
                        defaultMessage="Email" />
                    </span>
                    <FormattedMessage id="info_email"
                      defaultMessage="" />
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">
                      <FormattedMessage id="contact_linkedin"
                        defaultMessage="LinkedIn" />
                    </span>
                    <FormattedMessage id="info_linkedin"
                      defaultMessage="" />
                  </h6>
                </li>
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Dribbble</span>
                    taylor.dribbble
                  </h6>
                </li> */}
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  <FormattedMessage id="about_btn_downloadcv"
                    defaultMessage="download my cv" />
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                <FormattedMessage id="about_experience"
                  defaultMessage="experience" />
              </h2>
              <div className="resume-items">
                {
                  personalInfo[language]["experience"].map(item => {
                    {/* Item Starts */ }
                    return <div key={`${item.projects}`} className="item">
                      <span className="bullet" />
                      <div className="card">
                        <div className="card-header">
                          <span className="year">
                            <i className="fa fa-calendar" />
                            <i className="fa fa-caret-right" />
                            {item.year}
                          </span>
                          <span className="d-block font-weight-400 uppercase">
                            {item.role}
                            <span className="separator" />
                            <span className="font-weight-700">{item.institution}</span>
                          </span>
                        </div>
                        <div className="card-body">
                          <p>
                            {item.responsibilities}
                          </p>
                          <span className="d-block font-weight-400 uppercase">
                            <FormattedMessage id="about_projects"
                              defaultMessage="ACCOMPLISHED PROJECTS:" />
                            {item.projects != undefined && item.projects.map(project => {
                              return <li key={`li_${item.projects}`}>{project}</li>
                            })}

                          </span>

                        </div>
                      </div>
                    </div>
                    {/* Item Ends */ }
                  })
                }

              </div>
            </div>
            {/* Experience Ends */}
            {/* Education and Certification Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              {/* Education Starts */}
              <h2 className="font-weight-600 uppercase title-section">
                <FormattedMessage id="about_education"
                  defaultMessage="education" />
              </h2>
              <div className="resume-items">
                {
                  personalInfo[language]["education"].map(item => {
                    {/* Item Starts */ }
                    return <div key={`${item.institution}_${item.year}`} className="item">
                      <span className="bullet" />
                      <div className="card">
                        <div className="card-header">
                          <span className="year">
                            <i className="fa fa-calendar" />
                            <i className="fa fa-caret-right" />
                            {item.year}
                          </span>
                          <span className="d-block font-weight-400 uppercase">
                            {item.degree}
                            <span className="separator" />
                            <span className="font-weight-700">
                              {item.institution}
                            </span>
                          </span>
                        </div>
                        {/* <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            diam nonummy.
                          </p>
                        </div> */}
                      </div>
                    </div>
                    {/* Item Ends */ }

                  })
                }

              </div>
              {/* Education Ends */}
              <br></br>
              {/* Certification Starts */}
              <h2 className="font-weight-600 uppercase title-section">
                <FormattedMessage id="about_certifications"
                  defaultMessage="certifications" />
              </h2>
              <div className="resume-items">
                {
                  personalInfo[language]["certification"].map(item => {
                    {/* Item Starts */ }
                    return <div key={`cert_${item.institution}_${item.year}`} className="item">
                      <span className="bullet" />
                      <div className="card">
                        <div className="card-header">
                          <span className="year">
                            <i className="fa fa-calendar" />
                            <i className="fa fa-caret-right" />
                            {item.year}
                          </span>
                          <span className="d-block font-weight-400 uppercase">
                            {item.degree}
                            <span className="separator" />
                            <span className="font-weight-700">
                              {item.institution}
                            </span>
                          </span>
                        </div>
                        {/* <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            diam nonummy.
                          </p>
                        </div> */}
                      </div>
                    </div>
                    {/* Item Ends */ }

                  })
                }

              </div>
              {/* Certification Ends */}
            </div>
            {/* Education and Certification Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                <FormattedMessage id="about_skills"
                  defaultMessage="skills" />
              </h2>
            </div>
            {
              personalInfo[language]["skills"].map(item => {
                return <div key={`${item.knowledge}_${item.title}`} className="col-12 col-sm-6 col-md-4">
                  <span className="skill-text">{item.title}</span>
                  <div className="chart-bar">
                    <span
                      className="item-progress"
                      data-percent={item.knowledge}
                      style={{ width: `${item.knowledge}%` }}
                    />
                    <span className="percent" style={{ right: `calc(${100 - item.knowledge}% - 21px)` }}>
                      {item.knowledge}%
                      <b className="arrow" />
                    </span>
                  </div>
                </div>
              })
            }
          </div>
          {/* Skills Ends */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
