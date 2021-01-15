import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    //py-2 for padding
    <div className="footer-div py-2">
      <Fade>
        <p className="footer-text">
        {emoji("Made with ❤️ in India for the students of the world.")} 
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
