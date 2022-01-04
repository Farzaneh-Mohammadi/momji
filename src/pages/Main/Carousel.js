import React, { Component } from "react";
import "./Carousel.css";

// import Carousel from "react-spring-3d-carousel";

import videos from "../../assets/videos.png";
import podcast from "../../assets/podcast.png";
import pregnancy from "../../assets/pregnancy-algo.png";
import growing from "../../assets/growing-algo.png";
import article from "../../assets/article.png";

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
        this.angle = 0;
        this.rotate = 0;
        
        this.handleRight = this.handleRight.bind(this);
        this.handelLeft = this.handelLeft.bind(this);
        this.handelRotate = this.handelRotate.bind(this);

    }

    handleRight() {
        const carousel = document.querySelector(".carousel__cards");
        carousel.style.transform = ``;
        this.angle -= 72;
        carousel.style.transform = `translateZ(-25rem) rotateX(-14deg) rotateY(${this.angle}deg)`;
    }
    
    handelLeft() {
        const carousel = document.querySelector(".carousel__cards");
        carousel.style.transform = ``;
        this.angle += 72;
        carousel.style.transform = `translateZ(-25rem) rotateX(-14deg) rotateY(${this.angle}deg)`;
    }



    handelRotate() {
        // var i;
        // var slideIndex = 1;
        // var slides = document.getElementsByClassName("carousel__cards");
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].style.transform =``;
        // }
        //       this.rotate -= 72;

        // slides[slideIndex-1].style.transform =  `translateZ(-25rem)  rotateX(-14deg)   rotateY(${this.rotate}deg)`;

        const carousel = document.querySelector(".carousel__cards");
        carousel.style.transform = ``;
        this.angle += 72;
        carousel.style.transform = `translateZ(-25rem) rotateX(-14deg) rotateY(${this.angle}deg)`;
    }

 

    render() {
        return ( 
            <div className = "carousel" >
            <div className = "carousel__cards" >

                
            <div className = "carousel__card" >
            <img className = "carousel__img"
            id = "item1"
            src = { videos }
            alt = "videos"
            onClick = { this.handelRotate }
            />
            </div >

            <div className = "carousel__card" >
            <img className = "carousel__img"
            id = "item2"
            src = { podcast }
            alt = "podcast"
            onClick = { this.handelRotate }
            />
            </div >
            <div className = "carousel__card" >
            <img className = "carousel__img"
            id = "item3"
            src = { pregnancy }
            alt = "pregnancy"
            onClick = { this.handelRotate }
            />
             </div >
              <div className = "carousel__card" >
            <img className = "carousel__img"
            id = "item4"
            src = { growing }
            alt = "growing"
            onClick = { this.handelRotate }
            />
             </div >
              <div className = "carousel__card" >
            <img className = "carousel__img"
            id = "item5"
            src = { article }
            alt = "article"
            onClick = { this.handelRotate }
            />
             </div > 
              </div>

            <div className = "oval"/>

            <div className = "caption__container" >
            < button className = "carousel__btn carousel__btn--back"
            onClick = {this.handleRight}
            />
            <p className = "carousel-caption"> الگوریتم رشد کودک </p>
            <button className = "carousel__btn carousel__btn--next"
            onClick = {this.handelLeft}/>
             </div >



              </div>
        );
    }
}