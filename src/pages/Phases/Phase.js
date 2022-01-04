import React, { Component } from 'react';
import './Phase.css';
// import "../Nutrition/Categories.css"
import {  Link } from 'react-router-dom';

import calculate from "../../assets/calculate.png";


import SecHeader from '../shared/SecHeader'
import DrawerBottom from '../shared/DrawerBottom'

import calendar from "../../assets/calendar.png"
import prePreg from "../../assets/pre-preg.png"
import preg from "../../assets/preg.png"
import postPreg from "../../assets/post-preg.png"


export default class Phase extends Component {
  render() {
    return (
      <div className='phase-container'>
          <SecHeader />

          <div>
            <img className="calendar-icon" src={calendar} alt="calendar" />
          </div>
          

          {/* ---- boxes ----- */}
          <div className="boxes">

          <div className="box-title">
                  در چه دوره ای هستید؟
              </div>

              <Link to="/pre-pregnancy" >
              <div className="box-item">
                <img src={prePreg} className='preg-icons'/>
                  <p className="text"> پیش از بارداری </p>
              </div>
              </Link>


              <Link to="/pregnancy" >
              <div className="box-item">
              <img src={preg} className='preg-icons'/>
                  <p className="text"> بارداری </p>
              </div>
              </Link>

              <Link to="/post-pregnancy" >
              <div className="box-item">
              <img src={postPreg} className='preg-icons'/>
                    <p className="text"> پس از بارداری </p>
              </div>
              </Link>

          </div>

                    {/* ---- end boxes ----- */}



{/* ---------- date-input-container ----------------- */}
        <div className="date-input-container">
        <p className='date-title'> تاریخ اولین روز از آخرین قاعدگی شما </p>
        <div className='inputs'>
        <input type="text" className="day-input inp" placeholder="15"  />
        <input type="text" className="month-input inp" placeholder="اردیبهشت ماه" />
        <input type="text" className="year-input inp" placeholder="1400" />
        </div>
    

        <div className="date-input-container">
        <p className='date-title'> تاریخ تولد شما </p>
        <div className='inputs'>
        <input type="text" className="day-input inp" placeholder="15"  />
        <input type="text" className="month-input inp" placeholder="اردیبهشت ماه" />
        <input type="text" className="year-input inp" placeholder="1400" />
        </div>
        </div>

        <div className="date-input-container">
        <p className='date-title'> طول دوره قاعدگی شما </p>
        <input type="text" className="duration-input inp" placeholder="27 روز" />
        </div>

        <p className='date-title'> جنسیت دلخواه فرزند شما </p>
        <div className='gender-container'>
<div className=' gender boy'> پسر </div>
<div className=' gender'> فرقی نمی کنه </div>
<div className=' gender girl'> دختر </div>

        </div>

        </div>

{/* ---------- end date-input-container ----------------- */}


{/* <Link to="/meals"   className="card-item-title"> */}
            <div className="calculate">
              <img className="calculate-icon" src={calculate} alt="calculate" />
              <p className="calculate-title"> محاسبه اطلاعات </p>
            </div>
            {/* </Link> */}






          
          <DrawerBottom />
      </div>
    );
  }
}
