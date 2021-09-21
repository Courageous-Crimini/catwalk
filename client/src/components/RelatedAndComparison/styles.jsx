import styled from 'styled-components';

export const Wrapper = styled.section`
display: flex;
  margin: 0;
  padding-left: 6em;
  padding-right: 6em;

  /* border: 1px solid black; */
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: rgba(0, 0, 0, .2) -2px 1px 6px 1px; */
  /* padding-left: 1em; */
  /* padding-right: 1em; */

  /* border: 1px solid red; */
  `;

/* --                              carousel                                -- */
export const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  padding: 1em;
  /* border: 1px solid red; */


`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  /* &:hover {
    flex: 2;
  } */

  border: 1px solid green;
`;
/* --                                cards                                 -- */

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;

  /* border: 1px solid black; */
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
/* --                                images                                -- */

export const Button = styled.button`
  color: ${(props) => props.color};
`;

export default styled;

/* --                                Modal                                 -- */

export const Background = styled.section`
  width: 81.5%;
  height: 79%;
  background-color: rgba(204, 204, 204, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 12px;
  box-shadow: rbga(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  background-color: #CCC;

  border: 1px solid black;
`;
export const Compare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  border: 1px solid red;
  height: 75%;


`;
export const CompareCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  border: 1px solid green;
`;

/*                                  CSS FILE
 .image-slider .container {
   display:  flex;
   flex-direction: row;
   width: 100px;
   justify-content: center;
 }
 .image {
   height: 100px;
   width:  100px;
 }
 .slider-arrow {

 };
 */
