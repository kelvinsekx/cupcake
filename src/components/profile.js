import React from "react"

const Profile = ({user}) => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {user ? user.name : ""}</li>
      <li>E-mail: {user.email}</li>
    </ul>
  </>
)

export default Profile
