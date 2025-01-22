import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (props.token) {
      navigate(`/profile/${props.user?.id}`);
    }
  }, [props.token]);

  return (
    <div className="page_not_found p-6 text-center">
      <h1>404</h1>
      <h5>Ooops! Page Not Found</h5>
      <Link className="btn btn-primary mt-5" to={"/"}>
        Go to Home
      </Link>
    </div>
  );
};
export default NotFound;
