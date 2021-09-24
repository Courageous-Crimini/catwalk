/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { ImageModal } from './ImageModal.jsx';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};

  font-size: 1.2em;
  margin: 1.2em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const ReviewImage = ({ url }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <img src={url} key={url} alt="" height="50" onClick={openModal} />
      <ImageModal url={url} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ReviewImage;
