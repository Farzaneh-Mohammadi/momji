import React, { Component, createContext } from 'react';

export const CardContext = createContext();

export class CardProvider  extends Component {
    constructor(props){
        super(props);
        this.state = {card: "Meal"}
    }
  render() {
    return (
          <CardContext.Provider value={{...this.state}}>
            {this.props.children}
            jkh 
          </CardContext.Provider>
    );
  }
}
