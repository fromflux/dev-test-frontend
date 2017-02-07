import React, { Component } from 'react';

import BikesList from './BikesList';

class Bikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    window.fetch('/api/bikes')
      .then((res)=>{return res.json()})
      .then((json)=>{this.setState(json)});
  }

  sortedBikes() {
    let bikes = this.state.items.slice();
    let sorted = [];
    const order = ['race', 'comfort'];
    
    order.forEach((orderItem) => {
      bikes.forEach((bike) => {
        if (bike.class.indexOf(orderItem) > -1) {
          if (sorted.findIndex((item) => { return item.id === bike.id}) === -1) {
            sorted.push(bike);
          }
        }
      });
    });

    bikes.forEach((bike) => {
      if (sorted.findIndex((item) => { return item.id === bike.id}) === -1) {
        sorted.push(bike);
      }
    });

    return sorted;
  }

  render() {
    return (
      <div id="Bikes">
        <BikesList bikes={this.sortedBikes()} />
      </div>
    );
  }
}

export default Bikes;