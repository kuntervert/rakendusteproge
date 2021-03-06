import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./fancybutton.css";
import PropTypes from "prop-types";

const FancyButton = ({children, onClick}) =>(
    <div className={"btn btn--fancy"} onClick={onClick}>
    <div className={"btn-inner"}>
      <div>
        {children}
      </div>
      <FaAngleRight/>
    </div>
  </div>
);

FancyButton.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FancyButton;