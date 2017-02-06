import React from 'react';

const Root = (props) => {
  return (
    <div className="Root">
      <div className="Header">BIKES APPLICATION</div>
      <div className="Main">
        {props.children}
      </div>
    </div>
  );
}

export default Root;