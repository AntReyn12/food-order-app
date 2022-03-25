import React from "react";
import headerPic from "../../img/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Anthony's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={headerPic} alt="Table full of food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
