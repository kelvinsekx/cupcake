import React from "react"
import { login, isAuthenticated } from "../service/auth"

const Login = ()=> {
  if(!isAuthenticated()){
    login()
    return <p>Redirecting to login...</p>
  }
  return(
    <p>Something seems not right here!!</p>
  )
}

export default Login