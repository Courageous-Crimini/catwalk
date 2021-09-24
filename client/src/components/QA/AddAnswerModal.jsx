/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import axios from 'axios';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 700px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    position: relative;
    z-index: 1000;
    border-radius: 10px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    padding: 50px;
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: left;
  line-height: 26px;
  margin-bottom: 10px;
  margin-right: 100px;
`;

const Input = styled.input`
  padding: 1em;
  background: white;
  border: solid;
  border-color: black;
  border-width: 1px;
  width: 80%;
  height: 20px;
  flex: 0 0 200px;
  margin-left: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: black;
  color: white;
  margin-left: 5px;
  border-radius: 5px;
  font-size: 1.2em;
  margin: 1em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

export const Modal = ({ showModal, setShowModal, questionId, productInfo }) => {
  const [newAnswer, setNewAnswer] = useState(
    {
      name: '', email: '', body: '', photos: [],
    },
  );

  const handleChange = (event) => {
    setNewAnswer({
      ...newAnswer, [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/qa/questions/${questionId}/answers`, newAnswer)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1>Submit your Answer</h1>
              <h3 className="subtitle">{productInfo.name}</h3>
              <form onSubmit={handleSubmit}>
                <Label>
                  Answer:
                  <Input name="body" maxLength="1000" placeholder="Why did you like the product or not?" value={newAnswer.body} onChange={handleChange} />
                </Label>
                <Label>
                  Nickname:
                  <Input name="name" placeholder="Example: jackson543!" maxLength="60" value={newAnswer.name} onChange={handleChange} />
                </Label>
                <Label>
                  Email:
                  <Input name="email" maxLength="60" placeholder="Example: Jacques@tim.com" value={newAnswer.email} onChange={handleChange} />
                </Label>
                <Label>
                  Photos:
                  <Input type="file" />
                </Label>
                <div style={{ textAlign: 'center' }}>
                  <Button> Submit </Button>
                </div>
              </form>
            </ModalContent>
            <CloseModalButton
              area-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
