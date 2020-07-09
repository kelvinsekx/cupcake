import styled from "styled-components"

export const HookContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 870px) {
    flex-direction: column;
  }
`

export const FirstHook = styled.div`
  background-color: yellow;
  width: 50vw;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 870px) {
    width: 100vw;
  }
`

export const SecondHook = styled.div`
  background-color: #092955;
  width: 50vw;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid purple;
  @media only screen and (max-width: 870px) {
    width: 100vw;
  }
`;

export const HookParagraph = styled.p`
 color: #454545;
 font-size: 1.5rem;
 font-weight: 800;
`
