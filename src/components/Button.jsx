import { Link } from "react-router-dom";
function button(props) {
  const { buttonLabel, buttonFunc, path, className } = props;
  return (
    <>
      <button className={className} onClick={buttonFunc}>
        <Link to={path}>{buttonLabel}</Link>
      </button>
    </>
  );
}

export default button;
