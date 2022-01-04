import React, { Component } from "react";
import "./Pregnancy.css";

import checkTrue from "../../assets/true.png";
import saveOutline from "../../assets/save-outline.png";

import SecHeader from "../shared/SecHeader";
import DrawerBottom from "../shared/DrawerBottom";
import PreCalendar from "./PreCalendar";
import InfoCard from "./InfoCard";

class PrePregnancy extends Component {
  render() {
    return (
      <div className="page-container">
        <SecHeader />

        <PreCalendar time="پیش از بارداری" />


        <div className="info-card">
      <p className="info-title"> اطلاعات روز </p>
      <div className="pink-line"></div>

     <div className="info-items">

        <div className="info-item">
        <p>  دوره  </p>
        <p>روز 1 قاعدگی </p>
      </div>


      <div className="info-item">
        <p>  وضعیت تخمدان  </p>
        <p>روز 1 فولیکولار </p>
      </div>


      <div className="info-item">
        <p>  احتمال بارداری  </p>
        <p> متوسط </p>
      </div>

        <div className="info-item">
        <p> شروع دوره بعد قاعدگی</p>
        <p>18 آذر</p>
      </div>
      </div>
      </div>


        {/* <InfoCard
          firstTitle="دوره"
          firstInfo="روز 1 قاعدگی"
          secondTitle="وضعیت تخمدان"
          secondInfo="مرحله فولیکولار"
          thirdTitle="احتمال بارداری"
          thirdInfo="متوسط"
          forthTitle="شروع دوره بعد قاعدگی"
          forthTitle="18 آذر"
        /> */}



        {/* ----- similar-card ----- */}
        <div className="similar-card">

          {/* ---- meals-list ---- */}
          <div className="pre-meals-list" >
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

export default PrePregnancy;
