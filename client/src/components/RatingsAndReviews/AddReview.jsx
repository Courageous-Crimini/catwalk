import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './AddReviewModal.jsx';

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

const AddReview = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={openModal}> Add a question + </Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default AddReview;
