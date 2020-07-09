import styled from "styled-components"

export const HookContainer = styled.div`
  margin-top: 3rem;
`

export const FirstHook = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 25rem;
  display: flex;
  align-items: center;
  flex-direction:row-reverse;
  //justify-content: center;
  @media only screen and (max-width: 870px) {
    width: 100vw;
    flex-direction:column-reverse;
  }
`

export const SecondHook = styled.div`
  background-color: #092955;
  width: 100vw;
  height: 25rem;
  display: flex;
   align-items: center;
  // justify-content: center;
  border: 2px solid purple;
  @media only screen and (max-width: 870px) {
    width: 100vw;
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
 width: 68%;
 height: 97%;
`
export const Small = styled.small`
display: block;
`