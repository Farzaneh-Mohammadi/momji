import React, { Component } from 'react';
import Modal from "react-modal";

import edit from "../../assets/edit.png"

import './InfoCard.css';
import "./Modals.css";

class InfoCard extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


    render() {
        return (
      <div className="info-card">
      <p className="info-title"> اطلاعات روز </p>
      <div className="pink-line"></div>
      
      <div className="info-items">

      <div className="info-item">
        <p> {this.props.firstTitle} </p>
        <p>{this.props.firstInfo} </p>
      </div>

      <div className="info-item">
        <p>{this.props.secondTitle} </p>
        <p>{this.props.secondInfo} </p>
      </div>

      <div className="info-item">
        <p>{this.props.thirdTitle} </p>

        <button className="trigger-button" onClick={this.handleOpenModal}>
        <img className="edit-icon" src={edit} alt="edit" />
        </button>








        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >


          {/* ----------- modal-content ------------ */}
          <div className="modal-content">
            <p className="note-title">یادداشت و یادآوری</p>
            <div className="pink-line modal-line"></div>

            <form>
              <label  className="label-text">موضوع</label>
              <br />
              <select className="select-item note-input">
                <option value="doct">مراجعه به پزشک</option>
                <option value="">مراجعه 1</option>
                <option value="">مراجعه 2</option>
                <option value="">مراجعه 3</option>
              </select>
              <br />
              <br />
            </form>

            <div className="reminder">
              <span  className="span-text">هشدار تنظیم شود</span>
              <input type="checkbox" className="checkbox" />
            </div> <br />

            
            <label className="label-text"> متن یادداشت </label>
            <input className="note-text note-input"></input>
            <br /> <br />
            
            <button className="confirm-button" onClick={this.handleCloseModal}>تایید</button>
          </div>
          {/* ----------- end modal-content ------------ */}

        </Modal>




      </div>

      <div className="info-item">
        <p> شروع دوره بعد قاعدگی</p>
        <p>18 آذر</p>
      </div>



      </div>
      </div>
           
        );
    }
}

export default InfoCard;