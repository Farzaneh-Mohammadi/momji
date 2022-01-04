import React, { Component } from "react";
import "./Meals.css";
import {  Link } from 'react-router-dom';


import SecHeader from "../shared/SecHeader";
import DrawerBottom from "../shared/DrawerBottom";

import search from "../../assets/search.png";
import snacks from "../../assets/mian-vaade.png";
import checkTrue from "../../assets/true.png";
import checkFalse from "../../assets/false.png";
import saveFill from "../../assets/save-fill.png";
import saveOutline from "../../assets/save-outline.png";

import SnackCard from "../../pages/Nutrition/SnackCard"
import Mealcards from "./MealCards";


export default class Meals extends Component {
  constructor(props) {
    super(props)
  
    this.state = { };
    this.hideLabel = this.hideLabel.bind(this);
  };
  

  hideLabel() {
    document.getElementById("icon").style.marginRight = "9rem";
  }

  render() {
    return (
      <div className="meal-container">
        <SecHeader />

        {/* ------------ snacks icon ---------- */}

        <div>
          <img className="meal-icon" src={snacks} alt="snacks" />
        </div>

        {/* ------------ search box ---------- */}
          {/* <div className="search-box" style={{ marginTop: "-1.5rem" }}>
        <input type="text" className="search-input" placeholder="جستجو در میان وعده ها..." onClick={this.hideLabel} />

        <div className="inner-input" id="input">
            <span className="search-label"></span>
            <img className="search-icon" id="icon" src={search} alt="search" />
          </div>
        </div> */}

            

    <div className="search-box" style={{ marginTop: "-1.5rem" }}>

<div className="inner-input" >
<input type="text" className="search-input" placeholder="جستجو در میان وعده ها..."  />

<img className="search-icon"  src={search} alt="search" />
</div>


</div>


        {/* ------------ Meals List ---------- */}
        {/* <div className="meals-list">
          <p className="list-title"> صیفی جات </p>

          <div className="list-items"> */}
            {/* --- item-1 --- */}
            {/* <div className="meal-item">
                
              <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> هویج </span>
              <img className=" img save h" src={saveOutline} alt="save" />
            </div>
            <div className="line"></div> */}

            {/* --- item-2 --- */}
            {/* <div className="meal-item">
              <img className="img check" src={checkFalse} alt="checkFalse" />
              <span className="item-name"> فلفل دلمه ای </span>
              <img className=" img save" src={saveOutline} alt="save" />
            </div>
            <div className="line"></div> */}

            {/* --- item-3 --- */}
            {/* <div className="meal-item">
            <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> سبزی خوردن </span>
              <img className=" img save" src={saveFill} alt="save" />
            </div>
            <div className="line"></div> */}

            {/* --- item-4 --- */}
            {/* <div className="meal-item">
            <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> هویج </span>
              <img className=" img save h" src={saveOutline} alt="save" />
            </div>
            <div className="line"></div> */}

            {/* --- item-5 --- */}
            {/* <div className="meal-item">
            <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> فلفل دلمه ای </span>
              <img className=" img save" src={saveOutline} alt="save" />
            </div>
            <div className="line"></div> */}

            {/* --- item-6 --- */}
            {/* <div className="meal-item" style={{marginBottom: "0.5rem"}}>
            <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> سبزی خوردن </span>
              <img className=" img save" src={saveOutline} alt="save" />
            </div> */}



{/* 
            <div className="meal-item" style={{marginBottom: "0.5rem"}}>
            <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> سبزی خوردن </span>
              <img className=" img save" src={saveOutline} alt="save" />
            </div> */}

{/* 
          </div>
        </div> */}




        {/* <SnackCard /> */}
        <Mealcards />
        <DrawerBottom />
      </div>
    );
  }
}
