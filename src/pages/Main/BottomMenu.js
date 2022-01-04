import React, { Component } from "react";
import "./BottomMenu.css";
// import axios from "axios";
// import {  Link } from 'react-router-dom';


import community from "../../assets/community.png";
import doctor from "../../assets/doctor.png";
import support from "../../assets/support.png";
import exit from "../../assets/exit.png";

export default class BottomMenu extends Component {
  render() {
    return (
      <div className="bottom-container" >
        <div className="b-icons">
        <div className="community">
          <div className="img-bg">
            <img className="bottom-icons" src={community} alt="community" />
          </div>
          <p className="bottom-icon-title">انجمن</p>
        </div>

        <div className="doctor">
          <div className="img-bg">
            <img className="bottom-icons" src={doctor} alt="doctor" />
          </div>
          <p className="bottom-icon-title">پزشک</p>
        </div>

        <div className="support">
          <div className="img-bg">
            <img className="bottom-icons" src={support} alt="support" />
          </div>
          <p className="bottom-icon-title">پشتیبانی</p>
        </div>

        <div className="exit">
          <div className="img-bg">
            <img className="bottom-icons" src={exit} alt="exit" />
          </div>
          <p className="bottom-icon-title">خروج</p>
        </div>

        </div>
      </div>
    );
  }
}
