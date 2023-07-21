import { Link } from "react-router-dom";
function button(props) {
  const { buttonLabel, buttonFunc, path, className, title } = props;
  return (
    <>
      <button className={className} onClick={buttonFunc} title={title}>
        <Link to={path}>{buttonLabel}</Link>
      </button>
    </>
  );
}

export default button;
