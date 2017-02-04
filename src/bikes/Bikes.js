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
    this.setState({
      items: [
        {
          "id": 1,
          "name": "Litening C:68",
          "description": "The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.",
          "image": {
            "thumb": "https://jujhar.com/images/bikes/780300_overview.png",
            "large": "https://jujhar.com/images/bikes/780300_light.jpg"
          },
          "class": ["endurance", "race"]
        },
        {
          "id": 2,
          "name": "Litening C:62",
          "description": "A lightweight, dream bike for ambitious cyclists with a high-quality C:62 carbon frame.",
          "image": {
            "thumb": "https://jujhar.com/images/bikes/778400_overview.png",
            "large": "https://jujhar.com/images/bikes/778400_light.jpg"
          },
          "class": ["endurance", "race"]
        },
        {
          "id": 3,
          "name": "Agree C:62",
          "description": "With this bike, there are no compromises: C:62 Carbon frame, disc brakes and maximum aerodynamics it's ready for racing.",
          "image": {
            "thumb": "https://jujhar.com/images/bikes/778500_overview.png",
            "large": "https://jujhar.com/images/bikes/778500_light.jpg"
          },
          "class": ["comfort", "endurance", "race"]
        },
        {
          "id": 4,
          "name": "Attain GTC",
          "description": "Comformatable on tours, lightweight carbon fiber frame and with the option of discs make a great all rounder.",
          "image": {
            "thumb": "https://jujhar.com/images/bikes/777100_overview.png",
            "large": "https://jujhar.com/images/bikes/777100_light.jpg"
          },
          "class": ["comfort", "endurance"]
        },
        {
          "id": 5,
          "name": "Attain HPA",
          "description": "A high-quality aluminum frame for long tours with high comfort levels, ergonomically balanced and complete with a disc option.",
          "image": {
            "thumb": "https://jujhar.com/images/bikes/776402_overview.png",
            "large": "https://jujhar.com/images/bikes/776402_light.jpg"
          },
          "class": ["comfort", "endurance"]
        },
        {
          "id": 6,
          "name": "Cross Race",
          "description": "Reliable through mud, wind and the harshest conditions even when racing.",
          "image": {
            "thumb": "https://jujhar.com/images/bikes/788100_overview.png",
            "large": "https://jujhar.com/images/bikes/788100_light.jpg"
          },
          "class": ["endurance", "race"]
        },
        {
          "id": 7,
          "name": "SL Road",
          "description": "With the SL road, it's quick and comfortable to work and you can even do a relaxing after work ride.",
          "image": {
            "thumb": "https://jujhar.com/images/bikes/776400_overview.png",
            "large": "https://jujhar.com/images/bikes/776400_light.jpg"
          },
          "class": ["comfort"]
        }
      ]
    });
  }

  render() {
    return (
      <div id="Bikes">
        <BikesList bikes={this.state.items} />
      </div>
    );
  }
}

export default Bikes;