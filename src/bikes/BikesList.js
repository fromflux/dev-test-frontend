import React from 'react';

import BikesItem from './BikesItem';

const BikesList = ({ bikes }) => {
  return (
    <div className="BikesList">
      {
        bikes.map((item) => <BikesItem key={item.id} item={item} />)
      }
    </div>
  );
}

BikesList.propTypes = {
  bikes: React.PropTypes.array.isRequired
}

export default BikesList;