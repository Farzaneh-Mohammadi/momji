import React, { Component } from 'react';
import "./DescHeader.css"
import {  Link } from 'react-router-dom';


import descHeader from "../../assets/description-header.png";
import backIcon from "../../assets/back-white.png";
import saveIcon from "../../assets/save-out-white.png";

export default class DescHeader extends Component {
  render() {
    return (

        <div className="desc-header">
          <img className="desc-header-img" src={descHeader} alt="header" />

          <div className="desc-header-icons">
            <img className="back-icon" src={backIcon} alt="back" />
            <img className="save-icon" src={saveIcon} alt="save" />
          </div>
        </div>

    );
  }
}
