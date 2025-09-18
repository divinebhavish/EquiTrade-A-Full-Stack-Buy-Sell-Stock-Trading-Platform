import React from "react";

function OpenAccount() {
  return (
    <div className="container p-9">
      <div className="row text-center">
        <img src="media/landing.png" alt="Hero Banner" className="mb-5" />
        <h2 className="mt-6 mb-4">Open a EquiTrade account</h2>
        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
