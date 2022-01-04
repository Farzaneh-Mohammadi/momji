import React, { Component } from "react";
import "./Tss.css";

import videos from "../src/assets/videos.png";
import podcast from "../src/assets/podcast.png";
import pregnancy from "../src/assets/pregnancy-algo.png";
import growing from "../src/assets/growing-algo.png";
import article from "../src/assets/article.png";

export default class Tss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPos: 0,
    };

    this.angle = 0;
    this.rotate = 0;

    this.handleRight = this.handleRight.bind(this);
    this.handelLeft = this.handelLeft.bind(this);
  }

  handleRight() {
    this.setState({ dataPos: this.state.dataPos - 1 });
  }

  handelLeft() {
    this.setState({ dataPos: this.state.dataPos + 1 });
  }


  componentDidMount() {
    // const state = {};
    const carouselList = document.querySelector(".carousel__list");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const elems = Array.from(carouselItems);

    carouselList.addEventListener("click", function (event) {
      var newActive = event.target;
      //   var isItem = newActive.closest('.carousel__item');

      update(newActive);
    });

    const update = function (newActive) {
      const newActivePos = newActive.dataset.pos;

      const current = elems.find((elem) => elem.dataset.pos == 0);
      const prev = elems.find((elem) => elem.dataset.pos == -1);
      const next = elems.find((elem) => elem.dataset.pos == 1);
      const first = elems.find((elem) => elem.dataset.pos == -2);
      const last = elems.find((elem) => elem.dataset.pos == 2);

      current.classList.remove("carousel__item_active");

      [current, prev, next, first, last].forEach((item) => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos);
      });
    };

    const getPos = function (current, active) {
      const diff = current - active;

      if (Math.abs(current - active) > 2) {
        return -current;
      }

      return diff;
    };
  }




  render() {
    return (
      <div>
        <div class="carouselt">
          <div class="carousel__list">
            <img
              class="carousel__item"
              data-pos={this.state.dataPos - 2}
              src={videos}
              alt="videos"
            />
            <img
              class="carousel__item"
              data-pos={this.state.dataPos - 1}
              src={podcast}
              alt="podcast"
            />
            <img
              class="carousel__item"
              data-pos={this.state.dataPos}
              src={pregnancy}
              alt="pregnancy"
            />
            <img
              class="carousel__item"
              data-pos={this.state.dataPos + 1}
              src={article}
              alt="article"
            />
            <img
              class="carousel__item"
              data-pos={this.state.dataPos + 2}
              src={growing}
              alt="growing"
            />
          </div>
        </div>

        <div className="ovalt" />

        <div className="caption__containert">
          <button
            className="carousel__btnt carousel__btn--backt"
            onClick={this.handleRight}
          />
          <p className="carousel-captiont"> الگوریتم رشد کودک </p>
          <button
            className="carousel__btnt carousel__btn--nextt"
            onClick={this.handelLeft}
          />
        </div>
      </div>
    );
  }
}
