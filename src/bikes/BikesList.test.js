import React from 'react';
import { shallow } from 'enzyme';
import BikesList from './BikesList';

describe('BikesList', () => {
  let bikesList;
  const bikes = [{
    "id": 1,
    "name": "Bike 1 Name",
    "description": "Bike 1 Description",
    "image": {
      "thumb": "bike1_thumb.png",
      "large": "bike1_large.jpg"
    },
    "class": ["class1", "class2"]
  }, {
    "id": 2,
    "name": "Bike 2 Name",
    "description": "Bike 2 Description",
    "image": {
      "thumb": "bike2_thumb.png",
      "large": "bike2_large.jpg"
    },
    "class": ["class1", "class2"]
  }];

  beforeEach(() => {
    bikesList = shallow(<BikesList bikes={bikes} />);
  });

  it('Should render all passed items', () => {
    expect(bikesList.find('.BikesItem').length).toEqual(bikes.length);
  });
});