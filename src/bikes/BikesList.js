import React from 'react';

const BikesList = ({ bikes }) => {
  return (
    <div className="BikesList">
      {
        bikes.map((item) => {
          return (
            <div key={item.id} >{item.name}</div>
          );
        })
      }
    </div>
  );
}

BikesList.propTypes = {
  bikes: React.PropTypes.array
}

export default BikesList;