import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  it('Should render', () => {
    const app = shallow(<App />);
    expect(app.node.type.displayName).toEqual('Router');
    expect(app).toBeDefined();
  });
});