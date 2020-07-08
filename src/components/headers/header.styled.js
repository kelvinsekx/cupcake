import styled from "styled-components"

export const StyledHeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //border: 2px solid red;
  height: 3rem;
  max-height: 120%;
`

export const Logo = styled.a`
  font-size: 1.7rem;
  //border: 2px solid red;
`

export const StyledHeaderPDiv = styled.div`
  //border: 2px solid red;
  padding: 7.5% 4%;
`

export const StyledP = styled.p`
  //border: 2px solid black;
  text-align: center;
  font-weight: 610.10;
  @media only screen and (min-width: 710px){
   transform: scale(1, 1.75);
    font-size: 2.15rem;
  }
  @media only screen and (max-width: 710px){
    width: 80%;  
    font-size: 1.17rem;
      transform: scale(1, 1.75);
  }
`
