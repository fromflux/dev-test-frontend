import React from 'react';

const BikesItem = ({ item }) => {
  return (
     <div className="BikesItem">{item.name}</div>
  );
}

BikesItem.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default BikesItem;