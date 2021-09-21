import React, { useEffect, useState, useContext } from 'react';
import { Wrapper, Container } from './styles.jsx';
import RelatedProducts from './assets/RelatedProducts.jsx';
import YourOutfit from './assets/YourOutfit.jsx';
import Modal from './assets/Modal.jsx';
import { StateContext } from '../App.jsx';
import { RelatedContext } from './Context.jsx';

const RelatedAndComparison = () => {
  const state = useContext(StateContext);
  const { relatedStyles } = state;
  const [yourOutfit, setYourOutfit] = useState([]);
  const [modalKey, setModalKey] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const addOutfit = (id) => {
    let isThere = false;

    for (let i = 0; i < yourOutfit.length; i += 1) {
      if (yourOutfit.length > 0) {
        if (id === yourOutfit[i].styleID) {
          isThere = true;
          break;
        }
      }
    }
    if (!isThere) {
      for (let i = 0; i < relatedStyles.length; i += 1) {
        if (id === relatedStyles[i].styleID) {
          setYourOutfit(yourOutfit.concat(relatedStyles[i]));
          break;
        }
      }
    }
  };

  const removeOutfit = (id) => {
    for (let i = 0; i < yourOutfit.length; i += 1) {
      if (id === yourOutfit[i].styleID) {
        setYourOutfit(yourOutfit.slice(0, i).concat(yourOutfit.slice(i + 1)));
        break;
      }
    }
  };

  return (
    <Wrapper id="2">
      <RelatedContext.Provider
        value={{
          setModalKey,
          setOpenModal,
          modalKey,
          yourOutfit,
        }}
      >
        {openModal && <Modal />}
        <Container>
          <h2>Related Products</h2>
          <RelatedProducts addOutfit={addOutfit} />
          <h2>Your Outfit</h2>
          <YourOutfit handleClick={removeOutfit} />
        </Container>
      </RelatedContext.Provider>
    </Wrapper>
  );
};

export default RelatedAndComparison;
