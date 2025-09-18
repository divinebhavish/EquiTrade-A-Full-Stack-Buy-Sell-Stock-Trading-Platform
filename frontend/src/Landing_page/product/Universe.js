import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="fs-3 fw-semibold">The Zerodha Universe</h1>
      <p className="text-muted">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row mt-4">
        <div className="col-md-4 p-3">
          <img
            src="media/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            className="mb-2 img-fluid"
            style={{ maxWidth: "100px", height: "auto" }}
          />

          <p className="text-muted small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/sensibull-logo.svg"
            alt="Sensibull"
            className="mb-2 img-fluid"
            style={{ maxWidth: "440px", height: "auto" }}
          />
          <p className="text-muted small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/tijori.svg"
            alt="Tijori"
            className="mb-2 img-fluid"
            style={{ maxWidth: "100px", height: "auto" }}
          />
          <p className="text-muted small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4 p-3">
          <img
            src="media/streak-logo.png"
            alt="Streak"
            className="mb-2 img-fluid"
            style={{ maxWidth: "100px", height: "auto" }}
          />
          <p className="text-muted small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/smallcase-logo.png"
            alt="Smallcase"
            className="mb-2 img-fluid"
            style={{ maxWidth: "100px", height: "auto" }}
          />
          <p className="text-muted small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/ditto-logo.png"
            alt="Ditto"
            className="mb-2 img-fluid"
            style={{ maxWidth: "100px", height: "auto" }}
          />
          <p className="text-muted small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <button
        className="btn btn-primary fs-6 mt-4 mb-5"
        style={{ padding: "8px 20px" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
