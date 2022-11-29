import React from "react";

export default function rightpanel() {
  return (
    <section className="p-20 relative block bg-gray-900">
    <div class="main" id="Hobbies">
        <div class="main__container">
          <div class="main__img--container">
            <div class="main__img--card"><i class="fas fa-layer-group"></i></div>
          </div>
          <div class="main__content">
            <h1>What do we do?</h1>
            <h2>We help businesses scale</h2>
            <p>Schedule a call to learn more about our services</p>
            <button class="main__btn"><a href="#">Schedule Call</a></button>
          </div>
        </div>
      </div>
      </section>
  );
}