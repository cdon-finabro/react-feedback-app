import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

// set default props
Header.defaultProps = {
  text: "Please set a text for your header",
};

// not required with typescript
Header.defaultProps = {
  text: PropTypes.string,
};

export default Header;
