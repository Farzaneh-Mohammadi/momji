import React, { Component } from "react";
// import axios from 'axios';
import {  Link } from 'react-router-dom';


import ".//Verification.css";
import HeaderLogo from "../../assets/logo.png";

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ code: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`User Typed: ${this.state.code}`);
    this.setState({code: ""})
  }

  render() {
    return (
      <div className="register-contain">
        <div className="verification">
          <img src={HeaderLogo} alt="Header" />
        </div>

        <p className="verify-title">کد ارسالی پیامک شده را وارد کنید</p>

        <form className="input-form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            id="verifyCode"
            name="codeInput"
            value={this.state.code}
            onChange={this.handleChange}
          ></input>

          <div className="info">
            <p>شماره وارد شده</p>
            <span className="phone">+98 9121234568</span>
          </div>

          <p className="edit-num">
            شماره اشتباه است؟
            
            {/* <a href={"/register"} className="edit"> (ویرایش شماره) </a> */}
            <Link to="/register" className="edit" >  (ویرایش شماره)</Link>

                    
          </p>

          <button className="submit-button">ارسال </button>
        </form>
      </div>
    );
  }
}
export default Verification;
