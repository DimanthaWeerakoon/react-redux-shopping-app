import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu" style={{ padding: "15px" }}>
      <div className="ui container center">
        <Link to={`/`}>
          <h2 style={{ color: "black" }}>Fake Shop</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
