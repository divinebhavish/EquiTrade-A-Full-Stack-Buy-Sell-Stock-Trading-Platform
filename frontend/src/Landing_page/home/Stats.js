import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted" style={{ lineHeight: "2.0" }}>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br></br>
            lakh crores of equity investments, making us India's<br></br>
            largest broker contributing to 15% of daily retail<br></br>
            exchange volumes in India.
          </p>
          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted" style={{ lineHeight: "2.0" }}>
            No gimmicks, spam, "gamification", or annoying push<br></br>
            notifications. High quality apps that you use at your<br></br>
            lpace, the way you like.
          </p>
          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted" style={{ lineHeight: "2.0" }}>
            Not just an app, but a whole ecosystem. Our investments<br></br>
            in 30+ fintech startups offer you tailored services<br></br>
            specific to your needs.
          </p>
          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted" style={{ lineHeight: "2.0" }}>
            With initiatives like Nudge and Kill Switch, we don't just<br></br>
            facilitate transactions, but actively help you do better<br></br>
            with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/ecosystem.png" style={{ width: "120%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;