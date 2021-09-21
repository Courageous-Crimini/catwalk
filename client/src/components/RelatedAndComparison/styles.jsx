import styled from 'styled-components';

export const Wrapper = styled.section`
display: flex;
  margin: 0;
  padding-left: 4em;
  padding-right: 4em;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: rgba(0, 0, 0, .3) -2px 1px 6px 1px; */
  padding-left: 1em;
  padding-right: 1em;
  `;
export const LeftArrow = styled.div`
  position: absolute;
  padding-top: 15%;
  left: 3em;
  color: #000;
  font-size: 2em;
  opacity: .3;
  z-index: 10;
    &:hover {
    opacity: 1;
  }
`;
export const RightArrow = styled.div`
  position: absolute;
  padding-top: 15%;
  right: 3em;
  color: #000;
  font-size: 2em;
  opacity: .3;
  z-index: 10;
    &:hover {
    opacity: 1;
  }

`;
/* --                              carousel                                -- */
export const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
`;
export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-right: .5em;
  position: relative;
  box-shadow: rgba(0, 0, 0, .3) -2px 1px 6px 1px;
  border: .1em solid #A9A9A9;

  /* &:hover {
    width: 30%
  } */
`;
/* --                                cards                                 -- */

export const ImageContainer = styled.div`
  /* display: flex;
  justify-content: center; */
  position: relative;
  width: 100%;
  height: 70%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Button = styled.span`
  color: ${(props) => props.color};
  position: absolute;
  right: 0em;
  cursor: pointer;
  z-index: 10;

`;
export const CompareBtn = styled.span`
  color: ${(props) => props.color};
  padding: .25em;
  position: absolute;
  bottom: 1em;
  right: 0em;
  cursor: pointer;
  z-index: 10;

   &:hover {
    background-color:#FFF;
  }
`;
export const Price = styled.div`
  padding: .25em;
  position: absolute;
  left: 0em;
  bottom: 1em;
  text-decoration: ${(props) => props.cross};
  background-color:#FFF;
  &:hover {
    background-color: transparent;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
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
  z-index: 11;

  /* border: 1px solid black; */
  `;
export const Compare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  height: 75%;

  /* border: 1px solid red; */

  `;
export const CompareCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  /* border: 1px solid green; */
  `;

export default styled;
