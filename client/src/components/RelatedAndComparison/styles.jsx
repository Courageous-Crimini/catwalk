import styled from 'styled-components';

export const Wrapper = styled.section`
display: flex;
  margin: 0;
  padding-left: 4em;
  padding-right: 4em;
  width: 80%;


`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  `;
export const LeftArrow = styled.div`
  position: absolute;
  padding-top: 10%;
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
  padding-top: 10%;
  right: 7em;
  color: #000;
  font-size: 2em;
  opacity: .3;
  z-index: 10;
    &:hover {
    opacity: 1;
  }
`;
/* --                              CAROUSEL                                -- */
export const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
`;
export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 16%;
  height: 20em;
  margin-right: 2%;
  position: relative;
  box-shadow: rgba(0, 0, 0, .3) -2px 1px 6px 1px;
  border: .1em solid #A9A9A9;
  &:hover {
    width: 23%;
  }
`;
/* --                               IMAGES                                 -- */

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover
`;

export const StarBtn = styled.span`
  color: ${(props) => props.color};
  position: absolute;
  right: .5em;
  cursor: pointer;
  z-index: 10;
  border-radius: 100%;
  &:hover {
    background-color: #000;
    box-shadow: 0em 0em .2em .2em #000;
  }
`;
export const CloseBtn = styled.span`
  color: #FF0000;
  position: absolute;
  right: .5em;
  cursor: pointer;
  z-index: 10;
  border-radius: 100%;
`;
export const CornerBtn = styled.span`
  color: ${(props) => props.color};
  padding: .25em;
  position: absolute;
  bottom: 1em;
  right: 0em;
  cursor: pointer;
  text-transform: capitalize;
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
export const LeftImageArrow = styled.div`
  position: absolute;
  padding-top: 30%;
  left: 3em;
  color: #000;
  font-size: 2em;
  opacity: .3;
  z-index: 10;
    &:hover {
    opacity: 1;
  }
`;
export const RightImageArrow = styled.div`
  position: absolute;
  padding-top: 30%;
  right: 3em;
  color: #000;
  font-size: 2em;
  opacity: .3;
  z-index: 10;
    &:hover {
    opacity: 1;
  }
`;
/* --                             TEXT INFO                                -- */
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: ${(props) => props.size};

`;
/* --                                MODAL                                 -- */

export const Background = styled.section`
  width: 80%;
  height: 50em;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  `;

export const ModalContainer = styled.div`
  width: 90%;
  height: 70%;
  border-radius: 12px;
  box-shadow: rbga(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1em;
  position: relative;
  background-color: #CCC;
  z-index: 12;
  `;
export const Compare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  height: 75%;
`;
export const CompareCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 45%;
  background: #FFF;

  box-shadow: rgba(0, 0, 0, .3) -2px 1px 6px 1px;
  border: .1em solid #A9A9A9;
`;

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OverviewBtn = styled.button``;

export default styled;
