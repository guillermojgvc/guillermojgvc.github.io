import Head from "next/head";
import { Fragment, useState} from "react";
import ColorState from "../src/context/colorState";
import NavState from "../src/context/navState";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
// CUSTOM
import messages_en from "../lang/en.json";
import messages_es from "../lang/es.json";
import { IntlProvider, FormattedMessage, FormattedNumber, FormattedDate } from "react-intl";

function MyApp({ Component, pageProps }) {

  const messages = {
    'en': messages_en,
    'es': messages_es
  }

  // get browser language without the region code
  // const [language, setLanguage] = useState(navigator.language.split(/[-_]/)[0]);
  const [language, setLanguage] = useState('en');

  return (
    <IntlProvider defaultLocale="en" locale={language} key={`language`} messages={messages[language]}>
      <Fragment>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
          {/* Template CSS Files */}
          <link
            type="text/css"
            media="all"
            href="css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            type="text/css"
            media="all"
            href="css/jquery.animatedheadline.css"
            rel="stylesheet"
          />
          <link
            type="text/css"
            media="all"
            href="css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            type="text/css"
            media="all"
            href="/public/css/plugins.css"
            rel="stylesheet"
          />
          <link
            type="text/css"
            media="all"
            href="css/style.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
          <title>Guillermo Portfolio</title>
        </Head>
        <NavState>
          <ColorState>
            <Component {...pageProps} />
            <PreLoader />
          </ColorState>
        </NavState>
      </Fragment>
    </IntlProvider>
  );
}

export default MyApp;
