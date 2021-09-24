/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
// eslint-disable-next-line import/no-cycle
import { StateContext } from '../App.jsx';

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
    width: 1000px;
    height: 700px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    // grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 1000;
    border-radius: 10px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
    color: #141414;
    padding: 10px;
`;

const Form = styled.form`
text-align: center;
width: 100%
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
  margin-bottom: 1px;
  margin-left: 10px;
  margin-right: 100px;
`;

const Input = styled.input`
  padding: 0.1em;
  background: white;
  border: solid;
  border-color: black;
  border-width: 1px;
  width: 80%;
  height: 20px;
  flex: 0 0 65%;
  margin-left: 10px;
`;

const StarLabel = styled.label`
cursor: pointer;
`;

const StarInput = styled.input`
display: none;
`;

const TextArea = styled.textarea`
padding: 0.1em;
background: white;
border: solid;
border-color: black;
border-width: 1px;
width: 80%;
height: auto;
flex: 0 0 65%;
margin-left: 10px;
resize:none;
`;

const RadioDiv = styled.div`
padding: 0.1em;
background: white;
border-width: 1px;
width: 80%;
height: 20px;
flex: 0 0 65%;
margin-left: 10px;
`;

const Button = styled.button`
  background: black;
  color: white;
  border-radius: 3px;
  font-size: 1.2em;
  margin: 1em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 1.5px;
`;

const P = styled.p`
margin: 5px;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const state = useContext(StateContext);
  const selected = state.products.filter((product) => product.id === state.selectedProduct)[0];
  const selectedChars = Object.entries(state.reviewsMeta.characteristics);
  const productName = selected.name;
  const starmeaning = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];
  const [starHover, setStarHover] = useState(null);
  const [newReview, setNewReview] = useState(
    {
      product_id: state.selectedProduct,
      rating: 0,
      recommend: false,
      characteristics: {},
      summary: '',
      photos: [],
      name: '',
      email: '',
      body: '',
    },
  );

  const handleChange = (event) => {
    setNewReview({
      ...newReview, [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/reviews', newReview)
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
              <h1>Write Your Review</h1>
              <h5 className="subtitle">{`About the ${productName}`}</h5>
              <Form onSubmit={handleSubmit}>
                <Label>
                  Overall rating: *
                  <RadioDiv>
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <StarLabel key={ratingValue}>
                          <StarInput type="radio" name="rating" value={ratingValue} onChange={handleChange} />
                          <FaStar color={ratingValue <= (starHover || newReview.rating) ? '#ffc107' : '#e4e5e9'} size={20} onMouseEnter={() => setStarHover(ratingValue)} onMouseLeave={() => setStarHover(null)} />
                        </StarLabel>
                      );
                    })}
                    {starmeaning[newReview.rating]}
                  </RadioDiv>
                </Label>
                <Label>
                  Do you recommend this product? *
                  <RadioDiv>
                    <label>
                      <input type="radio" id="yes" name="recommend" value="true" onChange={handleChange} />
                      Yes
                    </label>
                    <label>
                      <input type="radio" id="no" name="recommend" value="false" onChange={handleChange} defaultChecked />
                      No
                    </label>
                  </RadioDiv>
                </Label>
                {selectedChars.map((characteristic) => (
                  <Label key={characteristic[1].id}>
                    {`${characteristic[0]}: *`}
                    <Input />
                  </Label>
                ))}
                <Label>
                  Review Summary:
                  <Input name="summary" placeholder="Example: Best purchase ever!" value={newReview.summary} onChange={handleChange} />
                </Label>
                <Label>
                  Review Body: *
                  <TextArea name="body" placeholder="Why did you like the product or not?" rows="6" maxLength="1000" value={newReview.body} onChange={handleChange} />
                </Label>
                <P>
                  {(newReview.body.length >= 50)
                    ? 'Minimum reached'
                    : `Minimum required characters left: [${50 - newReview.body.length}]`}
                </P>
                <Label>
                  Photos
                  <Input name="photos" value={newReview.photos} onChange={handleChange} />
                </Label>
                <Label>
                  Nickname: *
                  <Input name="name" placeholder="Example: jackson11!" maxLength="60" value={newReview.name} onChange={handleChange} />
                </Label>
                <P> For privacy reasons, do not use your full name or email address </P>
                <Label>
                  Email:
                  <Input name="email" maxLength="60" value={newReview.email} onChange={handleChange} />
                </Label>
                <P> For authentication reasons, you will not be emailed</P>
                <Button> Submit </Button>
              </Form>
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
