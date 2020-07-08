import React from "react"

import { Link } from "gatsby"

import {
  StyledHeaderNav,
  StyledHeaderPDiv,
  StyledP,
  Logo,
} from "./header.styled"

export default function LoggedInHeadder(props) {
  return (
    <div style={{ backgroundColor: "forestgreen", color: "#f2f2f2" }}>
      <StyledHeaderNav>
        <Logo>CUPCAKE</Logo>
        <Link to="/event" className="gatsbyLink">
          {props.username}
        </Link>
        <Link to="/event/create" className="gatsbyLink">
          create event
        </Link>
      </StyledHeaderNav>
    </div>
  )
}
