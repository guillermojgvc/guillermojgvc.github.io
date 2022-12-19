import { useContext, useState } from "react";
import NavContext from "../context/navContext";
import uuid from "react-uuid";
// CUSTOM
import { FormattedMessage, FormattedDate, useIntl } from "react-intl";
import info_en from "../../info/cv_en.json";
import info_es from "../../info/cv_es.json";
import docdef from "../../info/docdefinition";
// GENERATE PDF
import pdfMake from "pdfmake";
import vfs from "../../public/fonts/Helvetica-Font/vfs_fonts";

pdfMake.vfs = vfs;

pdfMake.fonts = {
  Helvetica: {
    normal: "Helvetica.ttf",
    bold: "Helvetica-Bold.ttf",
    italics: "Helvetica-Oblique.ttf",
    bolditalics: "Helvetica-BoldOblique.ttf"
  }
};

const About = () => {
  const intl = useIntl();
  const { nav } = useContext(NavContext);
  const [language, setLanguage] = useState(intl.formatMessage({ id: 'current' }));
  const [docDefinition, setDocDefinition] = useState(docdef);

  const personalInfo = {
    'en': info_en,
    'es': info_es,
  }

  const handleDownloadCV = () => {
    let cvDefinition = {...docDefinition};
    cvDefinition.content = cvDefinition.content.concat(generateCVContent());
    const pdfDocGenerator = pdfMake.createPdf(cvDefinition);
    pdfDocGenerator.download(`CV_Guillermo_Vaca`);
  }

  const getLangData = (langId) => {
    return intl.formatMessage({ id: langId }) || "";
  }

  const generateCVContent = () => {
    let cvDefinition = [
      // Informacion personal
      {
        "layout": 'noBorders',
        "table": {
          "widths": ['*'],
          "body": [
            [
              {
                "text": `${getLangData('about_personal_info').toLocaleUpperCase()}\n`,
                "style": 'subheader2'
              }
            ],
          ]
        }
      },
      { "text": " \n" },
      {
        "text": [
          {
            "text": `${getLangData('about_experience')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${ intl.formatMessage({id:'info_experience'},{
              "year": new Date().getFullYear() - intl.formatMessage({ id: 'info_since_year' })
            }) }`,
            "style": "normal",
          }
        ],
        "alignment": "justify",
      },
      {
        "text": [
          {
            "text": `${getLangData('about_birthdate')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${getLangData('info_birthdate')}`,
            "style": "normal",
          }
        ],
        "alignment": "justify",
      },
      {
        "text": [
          {
            "text": `${getLangData('about_address')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${getLangData('info_address')}`,
            "style": "normal",
          }
        ],
        "alignment": "justify",
      },
      {
        "text": [
          {
            "text": `${getLangData('about_nationality')}: `,
            "style": "normal_bold",
          },

          {
            "text": `${getLangData('info_nationality')}`,
            "style": "normal",
          }
        ],
        "alignment": "justify",
      },
      {
        "text": [
          {
            "text": `${getLangData('about_phone')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${getLangData('info_phone')}`,
            "style": "normal",
          }
        ],
        "alignment": "justify",
      },
      {
        "text": [
          {
            "text": `${getLangData('about_email')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${getLangData('info_email')}`,
            "style": "normal",
          }
        ],
        "alignment": "justify",
      },

      // EDUCATION
      " ",
      {
        "layout": 'noBorders',
        "table": {
          "widths": ['*'],
          "body": [
            [
              {
                "text": `${getLangData('about_education').toLocaleUpperCase()}\n`,
                "style": 'subheader2'
              }
            ],
          ]
        }
      },
      " ",

    ];

    //Agregar educacion
    personalInfo[language]["education"].map(item => {
      cvDefinition.push({
        "text": [
          {
            "text": `${getLangData('about_year')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${item["year"]}`,
            "style": "normal",
          },

        ],
        "alignment": "justify",
      });
      cvDefinition.push({
        "text": [
          {
            "text": `${getLangData('about_institution')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${item["institution"]}`,
            "style": "normal",
          },

        ],
        "alignment": "justify",
      });
      cvDefinition.push({
        "text": [
          {
            "text": `${getLangData('about_degree')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${item["degree"]}`,
            "style": "normal",
          },

        ],
        "alignment": "justify",
      });
      cvDefinition.push({ "text": " \n" });
    });

    // Generate Certifications
    let certificationList = [];
    personalInfo[language]["certification"].map(item => {
      certificationList.push(`${item['year']} - ${item['institution']}, ${item['degree']}\n`);
    });
    // Agregar certificacion
    cvDefinition.push(
      {
        "layout": 'noBorders',
        "table": {
          "widths": ['*'],
          "body": [
            [
              {
                "text": `${getLangData('about_certifications').toUpperCase()}\n`,
                "style": 'subheader2'
              }
            ],
          ]
        }
      }
     );

    cvDefinition.push({ "text": " \n" });
    cvDefinition.push({
      margin: [30, 0],
      ul: certificationList,
      lineHeight: 1.5
    });
    // Agregar experiencia
    cvDefinition.push({ "text": " \n" });
    cvDefinition.push(
      {
        "layout": 'noBorders',
        "table": {
          "widths": ['*'],
          "body": [
            [
              {
                "text": `${getLangData('about_experience').toUpperCase()}\n`,
                "style": 'subheader2'
              }
            ],
          ]
        }
      }
    );
    cvDefinition.push({ "text": " \n" });
    //
    personalInfo[language]["experience"].map(item => {
      cvDefinition.push({
        "text": [
          {
            "text": `${getLangData('about_year')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${item["year"]}`,
            "style": "normal",
          },

        ],
        "alignment": "justify",
      });
      cvDefinition.push({
        "text": [
          {
            "text": `${getLangData('about_institution')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${item["institution"]}`,
            "style": "normal",
          },

        ],
        "alignment": "justify",
      });
      cvDefinition.push({
        "text": [
          {
            "text": `${getLangData('about_role')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${item["role"]}`,
            "style": "normal",
          },

        ],
        "alignment": "justify",
      });
      cvDefinition.push({
        "text": [
          {
            "text": `${getLangData('about_responsibilities')}: `,
            "style": "normal_bold",
          },
          {
            "text": `${item["responsibilities"]}`,
            "style": "normal",
          },

        ],
        "alignment": "justify",
      });

      // AGREGAR PROJECTS
      let projectList = [];
      cvDefinition.push({
        "text": {
          "text": `${getLangData('about_projects')}\n`,
          "style": "normal_bold",
        }
      });

      item["projects"].map(item1 => {
        projectList.push(`${item1["text"]}`);
      });

      cvDefinition.push({
        margin: [30, 0],
        ul: projectList,
        lineHeight: 1.5
      });

      cvDefinition.push({ "text": " \n" });
    })

    // Agregar skills
    cvDefinition.push(
      {
        "layout": 'noBorders',
        "table": {
          "widths": ['*'],
          "body": [
            [
              {
                "text": `${getLangData('about_skills').toLocaleUpperCase()}\n`,
                "style": 'subheader2'
              }
            ],
          ]
        }
      }
    );

    cvDefinition.push({ "text": " \n" });
    let contador = 0;
    let skill = [];
    personalInfo[language]["skills"].map(item => {
      if (contador == 3) {
        contador = 0;

        cvDefinition.push({
          "alignment": 'justify',
          "columns": skill
        })

        cvDefinition.push({ "text": " \n" });

        skill = [];
      }

      skill.push([
        {
          text: `${item['title']}`
        },
        {
          "image": `star${Math.floor(parseInt(item['knowledge']) / 20)}${(parseInt(item['knowledge']) % 20) > 0 ? '5' : '0'}`,
          fit: [100, 100]
        },
      ]
      )
      contador++;


    });
    console.log(JSON.stringify(cvDefinition));

    return cvDefinition;
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
              <a href="#" onClick={handleDownloadCV} className="btn btn-resume">
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
                    return <div key={`${uuid()}`} className="item">
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
                              defaultMessage="ACCOMPLISHED PROJECTS" />
                            {item.projects != undefined && item.projects.map(project => {
                              return <li key={`li_${uuid()}`}>{project["text"]}</li>
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
                    return <div key={`${uuid()}`} className="item">
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
                    return <div key={`cert_${uuid()}`} className="item">
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
                return <div key={`${uuid()}`} className="col-12 col-sm-6 col-md-4">
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
