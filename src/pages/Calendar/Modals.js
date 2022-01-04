import React, { Component } from "react";
import Modal from "react-modal";

import "./Modals.css";

class Modals extends React.Component {
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
      <div>
        <button className="trigger-button" onClick={this.handleOpenModal}>Trigger</button>
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
            </div> 
            
            <label className="label-text"> متن یادداشت </label>
            <input className="note-text note-input"></input>
            <br /> <br />
            
            <button className="confirm-button" onClick={this.handleCloseModal}>تایید</button>
          </div>
          {/* ----------- end modal-content ------------ */}





        </Modal>
      </div>
    );
  }
}

export default Modals;
