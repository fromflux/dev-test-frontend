import React from 'react';

const BikesItem = ({ item }) => {
  return (
    <div className="BikesItem">
      <div className="BikesItem-thumb">
        <img src={item.image.thumb} alt={item.name} />
      </div>
      <div className="BikesItem-name">{item.name}</div>
      <div className="BikesItem-description">{item.description}</div>
      <ul className="BikesItem-class">
        {
          item.class.map(classItem => <li key={classItem}>{classItem}</li>)
        }
      </ul>
    </div>
  );
}

BikesItem.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default BikesItem;