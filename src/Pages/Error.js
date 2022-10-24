import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="section error-section">
      <h1>Opss something went wrong!</h1>
      <Link to="/" className="btn">
        back home
      </Link>
    </div>
  );
};

export default Error;
