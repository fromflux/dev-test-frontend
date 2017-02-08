import React, { Component } from 'react';

import BikesListToolbar from './BikesListToolbar';
import BikesList from './BikesList';

class Bikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: [],
      classes: []
    };
    this.setUserOptions = this.setUserOptions.bind(this);
  }

  componentDidMount() {
    this.getUserOptions();
    this.fetchBikes();
  }

  setUserOptions(options) {
    localStorage.setItem('options', JSON.stringify(options));
    this.setState({order: options});
  }

  getUserOptions() {
    const options = JSON.parse(localStorage.getItem('options'));
    if (options && options !== this.state.order) {
      this.setState({order: options});
    }
  }

  fetchBikes() {
    window.fetch('/api/bikes')
      .then((res)=>{return res.json()})
      .then((json)=>{
        let classes = [];
        json.items.forEach((item) => {
          item.class.forEach((itemClass) => {
            if (!classes.includes(itemClass)) {
              classes.push(itemClass);
            }
          });
        });
        this.setState({
          items: json.items,
          classes
        })
      });
  }

  sortedBikes() {
    let bikes = this.state.items.slice();
    let sorted = [];
    const order = this.state.order;
    
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
        <BikesListToolbar selected={this.state.order} options={this.state.classes} onUpdateSortOptions={this.setUserOptions} />
        <BikesList bikes={this.sortedBikes()} />
      </div>
    );
  }
}

export default Bikes;