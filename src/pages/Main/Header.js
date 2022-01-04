import React, { Component } from "react";
// import axios from "axios";
import {  Link } from 'react-router-dom';

import "./Header.css";
import bellImg from "../../assets/bell.png";
import quesImg from "../../assets/question.png";
import userIcon from "../../assets/user-icon.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        
        {/*  header-icons */}
        <div className="header-icons">
          <div className="user">
            <img className="icon" src={userIcon} alt="user" />
            <p>نام کاربر</p>
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
