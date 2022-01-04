import React, { Component } from "react";
import "./Similars.css";
import {  Link } from 'react-router-dom';


import DescHeader from "../shared/DescHeader";
import DrawerBottom from "../shared/DrawerBottom";

import checkTrue from "../../assets/true.png";
import checkFalse from "../../assets/false.png";
import saveOutline from "../../assets/save-outline.png";

export default class Similars extends Component {
  render() {
    return (
      <div className="similars">

        {/* ----- similar-card ----- */}
        <div className="similar-card">
          <p className="similar-title"> موارد مشابه </p>

          {/* ---- meals-list ---- */}
          <div className="similar-meals-list" style={{ marginTop: "1%" }}>
            <p className="similar-list-title"> صیفی جات </p>

            {/* ----- list-items ---- */}
            <div className="similar-list-items">
              {/* --- item-1 --- */}
              <div className="similar-meal-item">
                <img className="img check" src={checkTrue} alt="checkTrue" />
                <span className="item-name"> هویج </span>
                <img className=" img save h" src={saveOutline} alt="save" />
              </div>
              <div className="line"></div>

              {/* --- item-2 --- */}
              <div className="similar-meal-item">
                <img className="img check" src={checkFalse} alt="checkFalse" />
                <span className="item-name"> فلفل دلمه ای </span>
                <img className=" img save" src={saveOutline} alt="save" />
              </div>
              <div className="line"></div>
              {/* ----- end list-items ---- */}
            </div>
          </div>

          {/* ---- end meals-list ---- */}
        </div>
        {/* ----- end similar-card ----- */}

      </div>
    );
  }
}
