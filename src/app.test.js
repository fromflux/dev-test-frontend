import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  it('Should render', () => {
    const app = shallow(<App />);
    expect(app.find('h1').text()).toEqual('Bikes Front-End application');
  });
});