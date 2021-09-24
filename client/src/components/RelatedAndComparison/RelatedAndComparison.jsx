import React, { useState, useContext } from 'react';
import { RelatedContext } from './Context.jsx';
import { StateContext } from '../App.jsx';
import RelatedProducts from './assets/RelatedProducts.jsx';
import Modal from './assets/Modal.jsx';
import YourOutfit from './assets/YourOutfit.jsx';
import { Wrapper, Container, Price } from './styles.jsx';

const RelatedAndComparison = () => {
  const state = useContext(StateContext);
  const { relatedStyles } = state;
  const [yourOutfit, setYourOutfit] = useState([]);
  const [modalKey, setModalKey] = useState('');
  const [openModal, setOpenModal] = useState(false);

  // document.addEventListener('click', (event) => {
  //   console.log(1, openModal);
  //   if (openModal === true) {
  //     console.log('got here');
  //     setOpenModal(false);
  //     console.log(2, openModal);
  //   }
  //   console.log(3, openModal);
  // });

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
  const crossPrice = (origPrice, newPrice) =>
    (newPrice ? <Price cross="line-through">&#36;{origPrice}</Price> : <Price>&#36;{origPrice}</Price>);

  const onSale = (price) => (price ? <span style={{ color: 'red' }}>SALE&#36;{price}</span> : null);

  const showLeftArrow = (currentSpot) => (currentSpot != 0 ? true : false);
  const showRightArrow = (cardLength, spot) =>
    ((cardLength > 4 && spot < cardLength - 4) ? true : false);

  return (
    <Wrapper>
      <RelatedContext.Provider
        value={{
          setModalKey,
          setOpenModal,
          modalKey,
          yourOutfit,
        }}
      >
        {openModal && <Modal
          crossPrice={crossPrice}
          addOutfit={addOutfit}
          onSale={onSale}
        />}
        <Container>
          <h2>Related Products</h2>
          <RelatedProducts
            showRightArrow={showRightArrow}
            showLeftArrow={showLeftArrow}
            crossPrice={crossPrice}
            addOutfit={addOutfit}
            onSale={onSale}
          />
          <h2>Your Outfit</h2>
          <YourOutfit
            showRightArrow={showRightArrow}
            showLeftArrow={showLeftArrow}
            removeOutfit={removeOutfit}
            crossPrice={crossPrice}
            onSale={onSale}
          />
        </Container>
      </RelatedContext.Provider>
    </Wrapper>
  );
};

export default RelatedAndComparison;
