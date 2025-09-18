import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "35vh" }}
    >
      <div className="text-center">
        <h2 className="mt-6 mb-4">404 Not Found</h2>
        <p className="mb-4">
          We couldn't find the page you were looking for.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
