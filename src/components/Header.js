import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar is-primary">
          <div class="navbar-brand">
            <a class="navbar-item is-size-4"> Power Level </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>

        <section class="section">
          <div class="container">
            <p class="is-size-2">Is it over 9000?</p>
            <p>
              Using 20,000+ data set of atheletes who competed on official
              weight lifting Meets, this application finds your potential
              strength if you were as fit as them. Data is based on age, weight,
              sex, and kg lifted
              {/* for bench press, deadlift, and squat. */}
            </p>
            <p>Enter your data to see how much you'd life if you were fit</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
