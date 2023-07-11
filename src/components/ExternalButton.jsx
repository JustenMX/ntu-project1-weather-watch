/* eslint-disable react/prop-types */
//
function ExternalButton(props) {
  const { className, extButtonFunc, extButtonLabel, hrefLink } = props;
  return (
    <>
      <button
        className={className}
        onClick={extButtonFunc}
        href={hrefLink}
        target="_blank"
      >
        {extButtonLabel}
      </button>
    </>
  );
}
export default ExternalButton;
