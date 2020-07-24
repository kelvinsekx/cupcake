import React from "react"

import { StyledFlexLateral } from "./styled.js/pages-index.styled"

function CarosLink() {
  const Array = [
    "Wedding",
    "Club and Party",
    "Religious",
    "Education and Others",
  ]
  return (
    <div style={{ marginLeft: "3vw" }}>
      {Array.map(each => (
        <div style={{ marginTop: "5%" }}>
          <StyledFlexLateral>
            <label>{each} </label>
            <div><span className="arrow">&#10230;</span></div>
          </StyledFlexLateral>
          <div className="containerVert">
            <div>img</div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CarosLink
