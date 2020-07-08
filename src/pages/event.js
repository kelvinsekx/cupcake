// src/pages/account.js
import React from "react"
import { Router } from "@reach/router"
import { login,logout, isAuthenticated, getProfile } from "../service/auth"
import { Link } from "gatsby"

import Header from "../components/headers/LoggedInHeader";
import Home from "../components/@reachRouterC/home"
import CreateEvent from "../components/@reachRouterC/createEvent"
import EditEvent from "../components/@reachRouterC/editEvent"




const Event = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
    <Header username={user?user.name: "friend"} />
      <nav>
        <Link to="/event/create/">Create Event</Link>{" "}
        <Link to="/event/edit/{event_name}">Edit Event</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <br/><br/><br/><Link to="/">GO BACK</Link>
      <Router>
        <Home path="/event/" user={user} />
        <CreateEvent path="/event/create" />
        <EditEvent path="/event/edit/{event_name}" />
      </Router>
    </>
  )
}

export default Event
