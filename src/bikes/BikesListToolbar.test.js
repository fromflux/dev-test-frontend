import React from 'react';
import { shallow } from 'enzyme';
import BikesListToolbar from './BikesListToolbar';

describe('BikesListToolbar', () => {
  let bikesListToolbar;
  const selected = [];
  const options = ['class1', 'class2'];
  let onUpdateSortOptions;

  beforeEach(() => {
    onUpdateSortOptions = jest.fn();
    bikesListToolbar = shallow(<BikesListToolbar selected={selected} options={options} onUpdateSortOptions={onUpdateSortOptions} />);
  });

  it('Should render', () => {
    expect(bikesListToolbar.find('.BikesListToolbar').length).toEqual(1);
  });
});