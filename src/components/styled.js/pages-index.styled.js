import styled from "styled-components"

export const HookContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 510px) {
    flex-direction: column;
  }
`

export const FirstHook = styled.div`
  background-color: yellow;
  width: 50vw;
  height: 25rem;
  @media only screen and (max-width: 510px) {
    width: 100vw;
  }
`

export const SecondHook = styled.div`
  background-color: #092955;
  width: 50vw;
  height: 25rem;
  @media only screen and (max-width: 510px) {
    width: 100vw;
  }
`
