import React, { Component } from "react";
import "./SecHeader.css";
// import axios from "axios";
import {  Link } from 'react-router-dom';


import bellImg from "../../assets/bell.png";
import quesImg from "../../assets/question.png";
import backIcon from "../../assets/back.png";

export default class Header extends Component {
  render() {
    return (
      <div className="nut-header-container">
        {/*  header-icons */}

        <div className="header-icons">
          <div className="back">
            <img className="icon" src={backIcon} alt="back" />
          </div>
          <div className="icons">
            {" "}
            <img className="icon" src={quesImg} alt="question" />
            <img className="icon" src={bellImg} alt="bell" />
          </div>
        </div>
        {/* end header-icons */}
      </div>
    );
  }
}
