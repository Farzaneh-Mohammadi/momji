import React, { Component } from "react";
import "./PreCalendar.css";

import next from "../../assets/next.png";
import prev from "../../assets/prev.png";
import settings from "../../assets/settings.png";

class PreCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "فروردین ماه",
    };

    this.handleNextMonth = this.handleNextMonth.bind(this);
    this.handlePrevMonth = this.handlePrevMonth.bind(this);

  }

  static defaultProps = {};

  handleNextMonth() {
    if (this.state.month == "فروردین ماه") {
      this.setState({ month: "اردیبهشت ماه" });
    } else if (this.state.month == "اردیبهشت ماه") {
      this.setState({ month: "خرداد ماه" });
    } else if (this.state.month == "خرداد ماه") {
      this.setState({ month: "تیر ماه" });
    } else if (this.state.month == "تیر ماه") {
      this.setState({ month: "مرداد ماه" });
    } else if (this.state.month == "مرداد ماه") {
      this.setState({ month: "شهریور ماه" });
    } else if (this.state.month == "شهریور ماه") {
      this.setState({ month: "مهر ماه" });
    } else if (this.state.month == "مهر ماه") {
      this.setState({ month: "آبان ماه" });
    } else if (this.state.month == "آبان ماه") {
      this.setState({ month: "آذر ماه" });
    } else if (this.state.month == "آذر ماه") {
      this.setState({ month: "دی ماه" });
    } else if (this.state.month == "دی ماه") {
      this.setState({ month: "بهمن ماه" });
    } else if (this.state.month == "بهمن ماه") {
      this.setState({ month: "اسفند ماه" });
    }
  }






  handlePrevMonth() {
    if (this.state.month == "اسفند ماه") {
      this.setState({ month: "بهمن ماه" });
    }
     
    else if (this.state.month == "بهمن ماه") {
      this.setState({ month: "دی ماه" });
    }

     else if (this.state.month == "دی ماه") {
      this.setState({ month: "آذر ماه" });
    } 

    else if (this.state.month == "آذر ماه") {
      this.setState({ month: "آبان ماه" });
    } 

    else if (this.state.month == "آبان ماه") {
      this.setState({ month: "مهر ماه" });
    } 

    else if (this.state.month == "مهر ماه") {
      this.setState({ month: "شهریور ماه" });
    } 

    else if (this.state.month == "شهریور ماه") {
      this.setState({ month: "مرداد ماه" });
    } 

    else if (this.state.month == "مرداد ماه") {
      this.setState({ month: "تیر ماه" });
    } 

    else if (this.state.month == "تیر ماه") {
      this.setState({ month: "خرداد ماه" });
    } 

    else if (this.state.month == "خرداد ماه") {
      this.setState({ month: "اردیبهشت ماه" });
    } 
    
    else if (this.state.month == "اردیبهشت ماه") {
      this.setState({ month: "فروردین ماه" });
    }
  }





  render() {
    return (
      <div className="calendar-card">
        {/* --------- calendar-header ---------- */}
        <div className="calendar-header">
          <img
            className="cal-icon"
            src={next}
            alt="next"
            onClick={this.handleNextMonth}
          />




          <p className="header-title"> {this.state.month} </p>
          <img className="cal-icon" src={prev} alt="prev"  onClick={this.handlePrevMonth}/>
        </div>
        {/* --------- end calendar-header ---------- */}

        {/* ---------- calendar-numbers --------- */}
        <div className="calendar-numbers">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
          <div className="grid-item">7</div>
          <div className="grid-item">8</div>
          <div className="grid-item">9</div>
          <div className="grid-item" id="day1-pink">10</div>
          <div className="grid-item" id="day2-pink">11</div>
          <div className="grid-item" id="day3-pink">12</div>
          <div className="grid-item" id="day4-pink">13</div>
          <div className="grid-item" id="day5-pink">14</div>
          <div className="grid-item" id="day6-pink">15</div>
          <div className="grid-item" id="day7-pink">16</div>
          <div className="grid-item">17</div>
          <div className="grid-item">18</div>
          <div className="grid-item">19</div>
          <div className="grid-item">20</div>
          <div className="grid-item" id="day1-green">21</div>
          <div className="grid-item" id="day2-green">22</div>
          <div className="grid-item" id="day3-green">23</div>
          <div className="grid-item" id="day4-green">24</div>
          <div className="grid-item" id="day5-green">25</div>
          <div className="grid-item" id="day6-green">26</div>
          <div className="grid-item" id="day7-green">27</div>
          <div className="grid-item">28</div>
          <div className="grid-item">29</div>
          <div className="grid-item">30</div>
        </div>

        {/* ---------- end calendar-numbers --------- */}

        <div className="calendar-caption">
          <p className="caption-title">{this.props.time}</p>
          <img className="settings-icon" src={settings} alt="settings" />
        </div>
      </div>
      // ---- end calendar-card ----
    );
  }
}

export default PreCalendar;
