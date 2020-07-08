import React from "react"

import {
  FirstHook,
  SecondHook,
  HookContainer,
} from "../components/styled.js/pages-index.styled"

export default function Hook() {
  return (
    <HookContainer>
      <FirstHook>We love events</FirstHook>
      <SecondHook>Lets be a PART of that memory</SecondHook>
    </HookContainer>
  )
}
