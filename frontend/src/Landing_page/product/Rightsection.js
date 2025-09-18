import React from "react";

function Section({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        

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
              href={learnMore}
              style={{
                fontSize: "0.95rem",
                color: "#387ed1",
                textDecoration: "none",
                marginLeft: "1px"
              }}
            >
              Learn more →
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={imageURL}
            style={{ width: "85%", maxWidth: "480px" }}
            alt={productName}
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
