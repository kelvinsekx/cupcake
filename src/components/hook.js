import React from "react"

import Fun from "./icons/undraw_having_fun_iais.svg"
import Part from "./icons/undraw_online_party_ar9g.svg"
import {
  Small,
  FirstHook,
  SecondHook,
  HookContainer,
  HookParagraph,
  SVGContainer,
  StyledH2
} from "../components/styled.js/pages-index.styled"

export default function Hook() {
  return (
    <HookContainer>
      <FirstHook>
        <SVGContainer>
          <Fun width="100%" height="100%" />
        </SVGContainer>
        <div>
          <div>
            <StyledH2>You love events??</StyledH2>
            <Small>We love events too...</Small>
            <Small>We like it crazier than you would.</Small>
          </div>
        </div>
      </FirstHook>
      <SecondHook>
        <SVGContainer>
          <Part width="100%" height="100%" />
        </SVGContainer>
        <div>
          <div style={{padding: '2rem'}}>
            <StyledH2>Invite more than you can imagine.</StyledH2>
            <Small style={{ color: "grey" }}>
              Let us be a PART of your fears...
            </Small>
            <Small style={{ color: "grey" }}>
              We want to be a PART of you beating your FEARS.
            </Small>
          </div>
        </div>
      </SecondHook>
    </HookContainer>
  )
}
