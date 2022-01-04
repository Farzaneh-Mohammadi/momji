import React, { Component } from "react";

import checkTrue from "../../assets/true.png";
import saveOutline from "../../assets/save-outline.png";

import SecHeader from "../shared/SecHeader";
import DrawerBottom from "../shared/DrawerBottom";
import Calendar from "./Calendar";
import InfoCard from "./InfoCard";

class Pregnancy extends Component {
  render() {
    return (
      <div className="page-container">
        <SecHeader />

        <Calendar time="بارداری" />
        <InfoCard
          firstTitle="روزشمار بارداری"
          firstInfo="روز 1 بارداری"
          secondTitle="تاریخ مراجعه به پزشک"
          secondInfo="12 آبان"
          thirdTitle="یادداشت و یادآوری"
        />



          {/* ----- similar-card ----- */}
          <div className="similar-card">

{/* ---- meals-list ---- */}
<div className="preg-meals-list">
  <p className="list-title">  پیشنهاد تغذیه روز </p>

  {/* ----- list-items ---- */}
  <div className="list-items">
    {/* --- item-1 --- */}
    <div className="meal-item">
      <img className="img check" src={checkTrue} alt="checkTrue" />
      <span className="item-name"> سالاد کلم پیچ </span>
      <img className=" img save h" src={saveOutline} alt="save" />
    </div>
    <div className="line"></div>

    {/* --- item-2 --- */}
    <div className="meal-item">
      <img className="img check" src={checkTrue} alt="checkTrue" />
      <span className="item-name"> فلفل دلمه ای </span>
      <img className=" img save" src={saveOutline} alt="save" />
    </div>
    <div className="line"></div>
    {/* ----- end list-items ---- */}
  </div>
</div>

{/* ---- end meals-list ---- */}
</div>







        <DrawerBottom />
      </div>
    );
  }
}

export default Pregnancy;
