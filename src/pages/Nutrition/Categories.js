import React, { Component } from "react";
import "./Categories.css";
// import axios from "axios";
import {  Link } from 'react-router-dom';


import SecHeader from "../shared/SecHeader";
import DrawerBottom from "../shared/DrawerBottom";
// import Test from './Test';

import nutrition from "../../assets/nutrition.png";
import search from "../../assets/search.png";
import drink from "../../assets/drinks.png";
import meal from "../../assets/meal.png";
import food from "../../assets/food.png";

import user from "../../assets/user.jpg";

export default class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = { };
  };
  




  render() {
    return (
      <div className="nut-container">
        <SecHeader />

        <div className="content">
          {/* -------- food-icon --------- */}
          <div>
            <img className="food-icon" src={nutrition} alt="nutrition" />
          </div>

          {/* ------------ search box ---------- */}
          <div className="search-box" style={{ marginTop: "-1.5rem" }} >


<div className="inner-input" >
<input type="text" className="search-input" placeholder="جستجو در خوراکی ها..."  />

  <img className="search-icon"  src={search} alt="search" />
</div>


</div>

          {/* ------------ Cards ---------- */}
          <div className="cards">

          <Link to="/meals"   className="card-item-title">
            <div className="card-item">
              <img className="card-item-icon" src={food} alt="food" />
              <p className="card-item-title">وعده های غذایی</p>
            </div>
            </Link>



            <Link to="/snacks"   className="card-item-title">
            <div className="card-item">
              <img className="card-item-icon" src={meal} alt="meal" />
              <p className="card-item-title"> میان وعده ها </p>
            </div>
            </Link>


            <Link to="/drinks"   className="card-item-title">
            <div className="card-item">
              <img className="card-item-icon" src={drink} alt="drink" />
              <p className="card-item-title">نوشیدنی ها  </p>
            </div>
            </Link>


  
          </div>
          {/* ------------ End Cards ---------- */}

          <p className="comments-title"> نظرات و توصیه ها </p>
          <div className="comments">
            <p className="comments-caption">
              {" "}
              خانومای گلم، تو سه ماه آخر از خوردن کرفس خودداری کنین خیلی
              خطرناکه.{" "}
            </p>

            <div className="comments-subtitle">
              <div className="user-info">
                <img className="user-img" src={user} alt="user" />
                <p className="user-name"> نام کاربر </p>
              </div>

              <div>
                <p className="comments-date"> 30 روز پیش </p>
              </div>
            </div>
          </div>
          {/* ---- end comments ----- */}

          <p className="view-all"> دیدن همه نظرات +98 </p>
        </div>
        {/* --- End content ---- */}

        {/* <Test /> */}
        <DrawerBottom />
      </div>
    );
  }
}
