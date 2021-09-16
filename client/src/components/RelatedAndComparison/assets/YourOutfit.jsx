/* eslint-disable react/prop-types */
import React from 'react';
import Outfit from './Outfit.jsx';

const YourOutfit = ({ yourOutfit, handleClick }) => {
  if (yourOutfit.length > 0) {
    return (
      <Outfit yourOutfit={yourOutfit} handleClick={handleClick} />
    );
  }
  return (<>No items added</>);
};

export default YourOutfit;
