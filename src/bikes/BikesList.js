import React from 'react';

import BikesItem from './BikesItem';

const BikesList = ({ bikes }) => {
  return (
    <div className="BikesList">
      <div className="BikesList-toolbar">
        <button className="BikesList-button">SORT</button>
      </div>
      <div className="BikesList-list">
        {
          bikes.map((item) => <BikesItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
}

BikesList.propTypes = {
  bikes: React.PropTypes.array.isRequired
}

export default BikesList;