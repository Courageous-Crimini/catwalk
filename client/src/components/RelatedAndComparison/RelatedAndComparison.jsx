import React, { useState, useContext, useEffect } from 'react';
import { StateContext } from '../App.jsx';
import { RelatedContext } from './Context.jsx';
import Modal from './assets/Modal.jsx';
import RelatedProducts from './assets/RelatedProducts.jsx';
import YourOutfit from './assets/YourOutfit.jsx';
import { Wrapper, Container, Price } from './styles.jsx';

// Refactor to use the filter function instead of having an pIdx tracker later

const RelatedAndComparison = () => {
  // const state = useContext(StateContext);
  // const { relatedStyles, styles, products, selectedProduct, selectedProductFeatures, reviewsMeta } = state;
  const [yourOutfit, setYourOutfit] = useState([]);
  const [modalKey, setModalKey] = useState('');
  const [openModal, setOpenModal] = useState(false);
  // const [initialProductStyles, setInitialProductStyles] = ([]);

  // console.log('Products', products); // DELETE
  // console.log('Styles', styles); // DELETE
  // console.log('Features', selectedProductFeatures); // DELETE
  // console.log('Reviews Meta', reviewsMeta);
  // for (let i = 0; i < products.length; i += 1) {
  //   if (selectedProduct === products.id) {
  //     const pIdx = products[i];
  //     for (let k = 0; k < pIdx.styles.length; k += 1) {
  //       const sIdx = pIdx.styles.length[k];
  //       const initlalDataFormat = {
  //         id: pIdx.id,
  //         name: pIdx.name,
  //         category: pIdx.category,
  //         description: pIdx.description,
  //         slogan: pIdx.slogan,

  //         styleID: sIdx.style_id,
  //         styleName: sIdx.name,
  //         originalPrice: sIdx.original_price,
  //         salePrice: sIdx.sale_price,
  //         photos: sIdx.photos,
  //         features: selectedProductFeatures,
  //         ratings: reviewsMeta,
  //       };
  //       setInitialProductStyles(...initialProductStyles, initlalDataFormat);
  //     }
  //   }
  // }

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

  const showRightArrow = (cardLength) => (cardLength > 4 ? true : false);
  const showLeftArrow = (currentSpot) => (currentSpot != 0 ? true : false);

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
          onSale={onSale}
          addOutfit={addOutfit}
        />}
        <Container>
          <h2>Related Products</h2>
          <RelatedProducts
            addOutfit={addOutfit}
            crossPrice={crossPrice}
            onSale={onSale}
            showLeftArrow={showLeftArrow}
            showRightArrow={showRightArrow}
          />
          <h2>Your Outfit</h2>
          <YourOutfit
            removeOutfit={removeOutfit}
            crossPrice={crossPrice}
            onSale={onSale}
            showLeftArrow={showLeftArrow}
            showRightArrow={showRightArrow}
          />
        </Container>
      </RelatedContext.Provider>
    </Wrapper>
  );
};

export default RelatedAndComparison;
