import styled from "styled-components"

export const HookContainer = styled.div`
  margin-top: 3rem;
`

export const FirstHook = styled.div`
  //border: 2px solid red;
  background-color: #fff;
  width: 80vw;
  height: 70vh;
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction:row-reverse;
  margin: 2.5rem auto;
  //justify-content: center;
  @media only screen and (max-width: 870px) {
    width: 100vw;
    height: auto;
    flex-direction:column-reverse;
  }
`

export const SecondHook = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  height: 70vh;
  display: flex;
   align-items: center;
  // justify-content: center;
  margin: 2.5rem 0;
  //border: 2px solid purple;
  @media only screen and (max-width: 870px) {
    width: 100vw;
    height: auto;
    flex-direction: column;
  }
`;

export const HookParagraph = styled.p`
 color: #454545;
 font-size: 1.5rem;
 font-weight: 800;
`

export const SVGContainer = styled.div`
 //border: 2px solid red;
 width: 60%;
 height: 97%;
 @media only screen and (max-width: 870px) {
  width: 100%;
  height: 40vh;
}
`
export const Small = styled.small`
--font-size: 1.5rem;
--text-opacity: 1;
color: rgba(45,55,72,var(--text-opacity));
display: block;
font-weight: 500;
font-size: var(--font-size);
`

export const StyledH2 = styled.h2`
--text-opacity: 1;
color: rgba(26,32,44,var(--text-opacity));
font-size: 3rem;
font-weight: 770;
margin: 0.7em 0;
`