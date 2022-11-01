import MovingComponent from "react-moving-text";
// CUSTOM
import { FormattedMessage, useIntl } from "react-intl";

const AnimationText = () => {
  const intl = useIntl();

  return (
    <h1 className="ah-headline d-flex">

      <FormattedMessage id="animated_iam"
        defaultMessage="I'm" />
      {" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          intl.formatMessage({
            id: "animated_name",
            defaultMessage: ""
          }),
          intl.formatMessage({
            id: "animated_text1",
            defaultMessage: ""
          }),
          intl.formatMessage({
            id: "animated_text2",
            defaultMessage: ""
          }),
          intl.formatMessage({
            id: "animated_text3",
            defaultMessage: ""
          })
        ]}
      />
    </h1>
  );
};
export default AnimationText;
