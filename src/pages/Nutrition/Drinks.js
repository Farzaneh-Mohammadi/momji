import React, { Component } from "react";
import "./Meals.css";
import {  Link } from 'react-router-dom';


import SecHeader from "../shared/SecHeader";
import DrawerBottom from "../shared/DrawerBottom";
import Mealcards from "../Nutrition/MealCards"



// import nutrition from "../../assets/nutrition.png";
import search from "../../assets/search.png";
import meal from "../../assets/vaade.png";




export default class Meals extends Component {
  constructor(props) {
    super(props)
  
    this.state = { };
  };
  



  render() {
    return (

      
      <div className="meal-container">
        <SecHeader />

        {/* ------------ food icon ---------- */}

        <div>
          <img className="meal-icon" src={meal} alt="meal" />
        </div>

        {/* ------------ search box ---------- */}
        <div className="search-box" style={{ marginTop: "-1.5rem" }}>

        <div className="inner-input" >
<input type="text" className="search-input" placeholder="جستجو در وعده های غذایی..."  />

  <img className="search-icon"  src={search} alt="search" />
</div>


        </div>





        
        <Mealcards  />
{/* <div style={{marginTop: "90rem"}} />
<Mealcards /> */}





        <DrawerBottom />
      </div>
    );
  }
}
