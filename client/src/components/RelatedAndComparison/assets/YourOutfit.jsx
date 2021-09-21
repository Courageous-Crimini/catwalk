/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Outfit from './Outfit.jsx';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';

const YourOutfit = ({ handleClick }) => {
  const state = useContext(StateContext);
  const { relatedDisplay, relatedFeatures, relatedIdx, relatedStyles, relatedImages } = state;

  const { yourOutfit } = useContext(RelatedContext);

  if (yourOutfit.length > 0) {
    return (
      <Outfit yourOutfit={yourOutfit} handleClick={handleClick} />
    );
  }
  return (<>No items added</>);
};

export default YourOutfit;
