import React from "react";

export default function rightpanel() {
  return (
    <section className="pb-20 relative block bg-gray-900">
      <div className="main" id="sign-up">
        <div className="main__container">
          <div className="main__content">
            <h1>Join Our Team</h1>
            <h2>Sign Up Today</h2>
            <p>See what makes us different</p>
            <button className="main__btn">
              <a href="#">Sign Up</a>
            </button>
          </div>
          <div className="main__img--container">
            <div className="main__img--card" id="card-2">
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
