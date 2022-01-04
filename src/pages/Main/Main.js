import React, { Component } from "react";
import "./Main.css";
// import axios from "axios";
import { Link } from "react-router-dom";

import Header from "./Header";
// import CircularMenu from "./CircularMenu";
import Carousel from "./Carousel"
import Tss from "../../Tss"
import BottomMenu from "./BottomMenu";

import nutrition from "../../assets/nutrition.png";
import calendar from "../../assets/calendar.png";
import game from "../../assets/game-icon.png";


export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        {/* -------------------- Cards ---------------- */}
        <div className="card-container">
          <div className="nutrition card">
            <Link to="/categories" className="links">
              <img className="card-icon nut" src={nutrition} alt="nutrition" />
              <p className="nut-text"> تغذیه </p>
            </Link>
          </div>

          <div className="calendar card">
          <Link to="/phase" className="links">
            <img className="card-icon" src={calendar} alt="calendar" />
            <p className="cal-text">تقویم بارداری</p>
            </Link>
          </div>
        </div>
        {/* -------------------- End Cards ---------------- */}


        {/* --------- Banner -------- */}
        <div className="banner-container">
            <p className="banner-title"> بازی و سرگرمی </p>
            <img className="banner-icon" src={game} />
        </div>
        {/* --------- End Banner -------- */}



        <Carousel />
        {/* <Tss /> */}
        <BottomMenu />
      </div>
    );
  }
}
