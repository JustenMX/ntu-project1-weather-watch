/* eslint-disable react/prop-types */
//
function ExternalButton(props) {
  const { className, extButtonFunc, extButtonLabel, hrefLink } = props;
  return (
    <>
      <a
        className={className}
        onClick={extButtonFunc}
        href={hrefLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {extButtonLabel}
      </a>
    </>
  );
}
export default ExternalButton;
