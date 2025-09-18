import React from "react";
import { Link } from "react-router-dom";
// FIX: Corrected the relative path from ../../../ to ../../
// and matched the filename "bhavish photo.jpeg"
import bhavishPhoto from "../../assets/bhavish photo.jpeg";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">Developer</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.0em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src={bhavishPhoto}
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Bhavishya Mewara, Developer of EquiTrade"
          />
          <h4 className="mt-5">Bhavishya Mewara</h4>
          <h6>Developer, EquiTrade</h6>
        </div>
        <div
          className="col-6 p-1"
          style={{ marginLeft: "-40px", marginTop: "40px", fontSize: "1.1em" }}
        >
          <p>
            Bhavishya bootstrapped and developed EquiTrade in 2025 to overcome
            the hurdles he faced during his long stint as a trader. EquiTrade
            can change the landscape of the Indian broking industry.
          </p>
          <p>
            When he developed this project he was student of 2nd yead in
            Sathyabama Institute of Science & Technology, Chennai.
          </p>
          <p>Playing Football is his zen.</p>
          <p>
            Connect on{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            /{" "}
            <a
              href="https://github.com/divinebhavish"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/divinebhavish/"
              style={{ textDecoration: "none" }}
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;