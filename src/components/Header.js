import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div class="container">
        <nav className="navbar is-primary">
          <div className="navbar-brand">
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>
        <h2>Find your power level</h2>
        <p>
          Using 20,000+ data set of atheletes who competed on official weight
          lifting Meets, this application finds your potential strength if you
          were as fit as them. Data is based on age, weight, sex, and kg lifted
          {/* for bench press, deadlift, and squat. */}
        </p>
        <p>Enter your data to see how much you'd life if you were fit</p>
      </div>
    );
  }
}

export default Header;
