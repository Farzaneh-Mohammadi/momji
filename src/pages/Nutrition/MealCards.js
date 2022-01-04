import React, { Component } from "react";
import "./MealCards.css";
import {  Link } from 'react-router-dom';


import checkTrue from "../../assets/true.png";
import checkFalse from "../../assets/false.png";
import saveFill from "../../assets/save-fill.png";
import saveOutline from "../../assets/save-outline.png";




export default class Mealcards extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }


  render() {
    return (
      <div>
        {/* ------------ Meals List ---------- */}
        <div className="meals-list">
          <p className="list-title" onClick={this.handleImg}> صیفی جات </p>

          <div className="list-items">
            {/* --- item-1 --- */}
            <Link to="/description" >
            <div className="meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue"  />
              <span className="h"> هویج </span>
              {/* <img className=" img save k" src={saveOutline} alt="save" /> */}
              <img className="img save k"  alt="save" style={{marginRight:"61%"}} src={saveOutline}  />
            </div>
            </Link>
            <div className="line"></div>

            {/* --- item-2 --- */}
            <div className="meal-item">
              <img className="img check" src={checkFalse} alt="checkFalse" />
              <span className="item-name"> فلفل دلمه ای </span>
              {/* <img className=" img save" src={saveOutline} alt="save" /> */}
              <img className="img save"  alt="save" style={{marginRight:"40%"}} src={saveFill}  />
            </div>
            <div className="line"></div>

            {/* --- item-3 --- */}
            <div className="meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> سبزی خوردن </span>
              <img className=" img save" src={saveFill} alt="save" style={{marginRight:"40%"}} />
            </div>
            <div className="line"></div>

            {/* --- item-4 --- */}
            <div className="meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="h"> هویج </span>
              {/* <img className=" img save k" src={saveOutline} alt="save" /> */}
              <img className="img save k"  alt="save" style={{marginRight:"61%"}} src={saveOutline}  />
            </div>
            <div className="line"></div>

            {/* --- item-5 --- */}
            <div className="meal-item" id="last-item">
              <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> فلفل دلمه ای </span>
              {/* <img className=" img save" src={saveOutline} alt="save" /> */}
              <img className="img save"  alt="save" style={{marginRight:"40%"}} src={saveOutline}  />
            </div>
            <div className="line"></div>

            {/* --- item-6 --- */}
            <div className="meal-item" style={{ marginBottom: "0.5rem" }}>
              <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name"> سبزی خوردن </span>
              {/* <img className=" img save" src={saveOutline} alt="save" /> */}
              <img className="img save"  alt="save" style={{marginRight:"40%"}} src={saveOutline} />
            </div>


          </div>
        </div>
      </div>
    );
  }
}
