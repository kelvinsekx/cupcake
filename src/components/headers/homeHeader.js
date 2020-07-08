import React from "react"

import { Link } from "gatsby"

import {
  StyledHeaderNav,
  StyledHeaderPDiv,
  StyledP,
  Logo,
} from "./header.styled"

function HomeHeader() {
  return (
    <div style={{ backgroundColor: "forestgreen", color: "#f2f2f2" }}>
      <StyledHeaderNav>
        <Logo>CUPCAKE</Logo>
        <Link to="/beforeYouCreate" className="gatsbyLink">Get Yaa Event Started</Link>
      </StyledHeaderNav>

      <StyledHeaderPDiv>
        <StyledP>
          <span>Event that has a place,</span><span className="blockOr"> we make its home.</span></StyledP>
      </StyledHeaderPDiv>
    </div>
  )
}

export default HomeHeader
