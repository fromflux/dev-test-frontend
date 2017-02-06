import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

describe('Root', () => {
  let root;

  beforeEach(() => {
    root = shallow(<Root />);
  });

  it('Should render a Root wrapper', () => {
    expect(root.find('.Root').length).toEqual(1);
  });

  it('Should render a Header wrapper', () => {
    expect(root.find('.Header').length).toEqual(1);
  });

  it('Should render a Main wrapper', () => {
    expect(root.find('.Main').length).toEqual(1);
  });
});