import React, { Component } from "react";
import "./DrawerBottom.css";
// import {  Link } from 'react-router-dom';


import community from "../../assets/community.png";
import doctor from "../../assets/doctor.png";
import support from "../../assets/support.png";
import exit from "../../assets/exit.png";

import bottom from "../../assets/bottom.png";

export default class DrawerBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myFunction = this.myFunction.bind(this);
  }


  myFunction() {
    var u = document.getElementById("BtnTop");
    var w = document.getElementById("bot-fill");
    var x = document.getElementById("DrawerMenu");
    var y = document.getElementById("DrawerIcon");
    var z = document.getElementById("BtnRotate");

    if (y.style.visibility === "hidden") {
      y.style.visibility = "visible";
      x.style.marginBottom= "4rem";
      y.style.marginTop = "0";
      // z.style.marginBottom = "0.5rem";
      w.style.height = "4rem";
      x.style.transition= "all 1s";

      z.style.transform = "rotate(180deg)"
      z.style.transition= "all 1s";
      z.style.marginBottom = "1rem";

      u.style.marginBottom = "-1rem";
      u.style.transform = "rotate(180deg)";
    }

    else {
      y.style.visibility = "hidden";
      x.style.height= "0.8rem";
      x.style.marginBottom= "0";
      w.style.height = "1rem";
      // z.style.marginBottom = "10rem";
      z.style.transform = "rotate(0deg)"
      z.style.marginLeft= "-1.5rem"
    }

  }


  render() {
    return (
      <div>
        <div className="app-bar-bottom" id="DrawerMenu">
          {/* icons */}
          <div className="drawer-bottombar-icons" id="DrawerIcon">

            <div className="d-community">
              <div className="drawer-img-bg">
                <img className="drawer-bottom-icons" src={community} alt="community" />
              </div>
              <p className="bottom-icon-title">انجمن</p>
            </div>
 

            <div className="d-doctor">
              <div className="drawer-img-bg">
                <img className="drawer-bottom-icons" src={doctor} alt="doctor" />
              </div>
              <p className="bottom-icon-title">پزشک</p>
            </div>

            <div className="d-support">
              <div className="drawer-img-bg">
                <img className="drawer-bottom-icons" src={support} alt="support" />
              </div>
              <p className="bottom-icon-title">پشتیبانی</p>
            </div>

            <div className="d-exit">
              <div className="drawer-img-bg">
                <img className="drawer-bottom-icons" src={exit} alt="exit" />
              </div>
              <p className="bottom-icon-title">خروج</p>
            </div>
          </div>
          {/* end icons */}

          <div className="btn" onClick={this.myFunction} id="BtnRotate">
              <img className="top" src={bottom} alt="top"  id="BtnTop"/>
            {/* </div> */}
          </div>

<div className="bottom-fill" id="bot-fill"></div>

        </div>
      </div>
    );
  }
}
