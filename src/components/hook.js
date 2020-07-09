import React from "react"

import Fun from "./icons/undraw_having_fun_iais.svg"
import Part from "./icons/undraw_online_party_ar9g.svg"
import {
  FirstHook,
  SecondHook,
  HookContainer,
  HookParagraph
} from "../components/styled.js/pages-index.styled"

export default function Hook() {
  return (
    <HookContainer>
      <FirstHook>
        <div>
          <Fun width="400" height="400" />
        </div>
        <div>
          <HookParagraph>
            We love events.
          </HookParagraph>
        </div>
      </FirstHook>
      <SecondHook>
        <div>
          <Part width="400" height="400" />
        </div>
        <div>
          <HookParagraph>Lets be a PART of that memory.</HookParagraph>
        </div>
      </SecondHook>
    </HookContainer>
  )
}
