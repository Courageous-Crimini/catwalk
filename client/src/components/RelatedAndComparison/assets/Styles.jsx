import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  height: 80em;
  margin: 0;
  padding-left: 6em;
  padding-right: 6em;
  box-sizing: border-box;

  /* background-color: red; */
`;
export const Container = styled.div`
  height: 97%;
  box-shadow: rgba(0, 0, 0, .2) -2px 1px 6px 1px;
  background-color: #F3F3F3;
  padding-left: 1em;
  padding-right: 1em;

  /* background-color: blue; */
  `;

/* --                              carousel                                -- */
export const Cards = styled.div`
  width: 100%;
  height: 45%;
  display:  flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: left;
  background-color: red;
  `;
/* --                                cards                                 -- */
export const Card = styled.section`
  width: 19%;
  margin-right: 1%;

  border: 1px solid black;
  background-color: blue;
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
`;
export const InfoContainer = styled.div`
  width: 100%;
  height: 20%;
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

/*                                  CSS FILE
/--                                images

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

--                                Modal
.related-modal-background {
  position: fixed;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;
}
.related-modal-container {
  width: 100%;
  height: 600px;
  border-radius: 12px;
  box-shadow: rbga(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  position: relative;

  background-color: #CCCCCC;
  background: blue;
  */
