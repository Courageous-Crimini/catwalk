/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { RelatedContext } from '../Context.jsx';
import Outfit from './Outfit.jsx';

const YourOutfit = ({
  removeOutfit, crossPrice, onSale, showLeftArrow, showRightArrow
}) => {
  const { yourOutfit } = useContext(RelatedContext);

  if (yourOutfit.length > 0) {
    return (
      <Outfit
        yourOutfit={yourOutfit}
        removeOutfit={removeOutfit}
        crossPrice={crossPrice}
        onSale={onSale}
        showLeftArrow={showLeftArrow}
        showRightArrow={showRightArrow}
      />
    );
  }
  return (<>No items added</>);
};

export default YourOutfit;
