import React, { Component } from "react";
import "./Register.css";
// import axios from 'axios';
import {  Link } from 'react-router-dom';
// import "re-react";

import HeaderLogo from "../../assets/logo.png";



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ phoneNumber: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // alert(`User Typed: ${this.state.phoneNumber}`);
    this.setState({phoneNumber: ""})
  }

 
  render() {
    return (
      <div className="register-contain">
        <div className="Register">
          <img className="reg-logo" src={HeaderLogo} alt="Header" />
        </div>

        <p className="register-title">ثبت نام و ورود</p>

        <form className="input-form" onSubmit={this.handleSubmit}>
          <label className="form-label" htmlFor="phoneNum">
            شماره همراه <span>(ضروری)</span>
          </label>
          <input
          // type="number"
          className="input"
            id="phoneNum"
            name="phoneInput"
            type="number"
            // maxLength="3"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          
          ></input>
          <button className="submit-button" >
           

            {/* <a href={"/verify"} className="edit"> ارسال کد تایید</a> */}
            <Link to="/verification" className="edit" >  ارسال کد تایید </Link>

            
          </button>

        </form>
      </div>
    );
  }
}
export default Register;
