import React from 'react';
import { shallow } from 'enzyme';
import BikesItem from './BikesItem';

describe('BikesItem', () => {
  let bikesItem;
  const item = {
    "id": 1,
    "name": "Bike 1 Name",
    "description": "Bike 1 Description",
    "image": {
      "thumb": "bike1_thumb.png",
      "large": "bike1_large.jpg"
    },
    "class": ["class1", "class2"]
  };

  beforeEach(() => {
    bikesItem = shallow(<BikesItem item={item} />);
  });

  it('Should render passed item', () => {
    expect(bikesItem.find('.BikesItem-thumb img').prop('src')).toEqual(item.image.thumb);
    expect(bikesItem.find('.BikesItem-name').text()).toEqual(item.name);
    expect(bikesItem.find('.BikesItem-description').text()).toEqual(item.description);
  });
});