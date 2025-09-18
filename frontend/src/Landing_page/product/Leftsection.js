import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={imageURL}
            style={{ width: "85%", maxWidth: "480px" }}
            alt={productName}
          />
        </div>

        {/* Content Section */}
        <div className="col-md-5 ms-md-5">
          <h2 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
            {productName}
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
            {productDesription}
          </p>

          {/* Links */}
          <div className="mt-3">
            <a
              href={tryDemo}
              style={{
                fontSize: "0.95rem",
                color: "#387ed1",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              Try demo →
            </a>
            <a
              href={learnMore}
              style={{
                fontSize: "0.95rem",
                color: "#387ed1",
                textDecoration: "none",
                marginLeft: "45px"
              }}
            >
              Learn more →
            </a>
          </div>

          {/* Store Badges */}
          <div className="mt-4 d-flex gap-3">
            <a href={googlePlay}>
              <img src="media/google-play-badge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/appstore-badge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
