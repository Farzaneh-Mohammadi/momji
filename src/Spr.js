import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";

import "./Spr.css";
import "../src/pages/Main/Carousel.css";

import videos from "../src/assets/videos.png";
import podcast from "../src/assets/podcast.png";
import pregnancy from "../src/assets/pregnancy-algo.png";
import growing from "../src/assets/growing-algo.png";
import article from "../src/assets/article.png";

export default class Spr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goToSlide: 0,
      offsetRadius: 2,
      // showNavigation: true,
      config: config.gentle,
    };
    this.angle = 0;
    this.rotate = 0;

    this.handleRight = this.handleRight.bind(this);
    this.handelLeft = this.handelLeft.bind(this);
  }


  
  handleRight() {
    // const carousel = document.querySelector(".cvb");
    // carousel.style.transform = ``;
    // this.angle -= 72;
    // carousel.style.transform = `translateZ(-25rem) rotateX(-14deg) rotateY(${this.angle}deg)`;

    
    this.setState({ goToSlide: this.state.goToSlide + 1 })

    const ca = document.getElementById("cvb");
    ca.style.transition= ``
        // this.angle += 72;

        // ca.style.transition = "all 2s ease";
        // ca.style.marginRight = "130px";
        // ca.style.width = "60px";
        // ca.style.opacity =" 0.6"
  }


  handelLeft() {
      // this.setState({ goToSlide: this.state.goToSlide - 1 })
  }



  slides = [
    {
      //   key: uuidv4(),
      // <img className = "carousel__img"

      content: <img src={videos} alt="videos" id="cvb" />,
    },
    {
      //   key: uuidv4(),
      content: <img src={article} alt="videos" id="cv1" />,
    },
    {
      //   key: uuidv4(),
      content: <img src={podcast} alt="videos" id="cv2" />,
    },
    {
      //   key: uuidv4(),
      content: <img src={growing} alt="videos" id="cv3" />,
    },
    {
      //   key: uuidv4(),
      content: <img src={pregnancy} alt="videos" id="cv4" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  
  onChangeInput = (e) => {
    this.setState({
      // [e.target.name]: parseInt(e.target.value, 10) || 0,
      [e.target.name]: e.target.value

    });
  };

  render() {
    return (
      <div>
        <div style={{ width: "20%", height: "100px", marginTop: "2rem", marginRight:"40%" }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            showNavigation={this.state.showNavigation}
            // animationConfig={this.state.config}
          />
        </div>

        {/* <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div> */}

        {/* </div> */}

        <div className="caption__container  nm" style={{marginTop: "0",  marginRight:"35%"}}>
          <button
            className="carousel__btn carousel__btn--back"
            onClick={this.handleRight}
          />
          <p className="carousel-caption"> الگوریتم رشد کودک </p>
          <button
            className="carousel__btn carousel__btn--next"
            // id="cvb"
            onClick={this.handelLeft}
          />
        </div>
      </div>
    );
  }
}
