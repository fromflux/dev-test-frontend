import React from 'react';
import { shallow } from 'enzyme';
import Bikes from './Bikes';

describe('Bikes', () => {
  let bikes;

  beforeEach(() => {
    bikes = shallow(<Bikes />);
  });

  it('Should render a BikesList', () => {
    expect(bikes.find('BikesList').length).toEqual(1);
  });
});