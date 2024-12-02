import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import NavContext from "../context/navContext";
// CUSTOM
import { FormattedMessage, useIntl } from "react-intl";

const Contact = () => {
  const { nav } = useContext(NavContext);
  const intl = useIntl();

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id="contact" className={`${nav === "contact" ? "active" : ""}`}>
      <div className="contact-container">
        {/* Main Heading Starts */}
        <div className="container page-title text-center">
          <h2 className="text-center">
            <span>
              <FormattedMessage id="contact_getintouch"
                defaultMessage="get in touch" />
            </span>
          </h2>
          <span className="title-head-subtitle">
            <FormattedMessage id="contact_subtitle"
              defaultMessage="I’m always open to discussing product design work or partnerships." />
          </span>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          <div className="row contact">
            {/* Contact Infos Starts */}
            <div className="col-12 col-md-12 col-xl-12">
              <ul className="custom-list">
                {/* <li>
                  <h6 className="font-weight-600">
                    {" "}
                    <span className="contact-title">Phone</span>
                    <i className="fa fa-whatsapp" />
                    <span className="contact-content">+216 21 184 010</span>
                  </h6>
                </li> */}
                <li>
                  <h6 className="font-weight-600">
                    {" "}
                    <span className="contact-title">
                      <FormattedMessage id="contact_email"
                        defaultMessage="email" />
                    </span>
                    <i className="fa fa-envelope-o fs-14" />
                    <span className="contact-content">
                      <a title="LinkedIn" href={`mailto:${intl.formatMessage({
                        id: "info_email",
                        defaultMessage: "#"
                      })}`}>
                        <FormattedMessage id="info_email"
                          defaultMessage="email" />
                      </a>
                    </span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">
                      <FormattedMessage id="contact_linkedin"
                        defaultMessage="LinkedIn" />
                    </span>
                    <i className="fa fa-linkedin" />
                    <span className="contact-content">
                      <a title="LinkedIn" href={`${intl.formatMessage({
                        id: "info_linkedin",
                        defaultMessage: "#"
                      })}`}>
                        <FormattedMessage id="info_linkedin"
                          defaultMessage="LinkedIn" />
                      </a>
                    </span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">
                      <FormattedMessage id="contact_github"
                        defaultMessage="Github" />
                    </span>
                    <i className="fa fa-github" />
                    <span className="contact-content">
                      <a title="Github" href={`${intl.formatMessage({
                        id: "info_github",
                        defaultMessage: "#"
                      })}`}>
                        <FormattedMessage id="info_github"
                          defaultMessage="Github" />
                      </a>
                    </span>
                  </h6>
                </li>
              </ul>
              {/* Social Media Profiles Starts */}
              <div className="social">
                <h6 className="font-weight-600 uppercase">
                  <FormattedMessage id="contact_profiles"
                    defaultMessage="Social Profiles" /></h6>
                <ul className="list-inline social social-intro text-center p-none">
                  <li className="facebook">
                    <a title="Facebook" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a title="Twitter" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="youtube">
                    <a title="Youtube" href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  {/* <li className="dribbble">
                    <a title="Dribbble" href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li> */}
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
