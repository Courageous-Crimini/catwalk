import React from 'react';
import Outfit from './Outfit.jsx';

const YourOutfit = ({ yourOutfit, handleRemoveClick }) => {
  if (yourOutfit.length > 0) {
    return (
      <Outfit yourOutfit={yourOutfit} handleRemoveClick={handleRemoveClick} />
    );
  }
  return (<>No outfits added</>);
};

export default YourOutfit;
