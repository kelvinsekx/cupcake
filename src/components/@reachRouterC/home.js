import React from "react"

const Home = ({ user }) => {
    return (
    <div>
      <p>Hi, {user?user.name: "friend"}!</p>
      <p>if(event::that is the holder have create an event render this page:)</p>
      <p>(list event created with a Link to it)</p>
      <p>(render a link that says add another event)</p>
      <p>if(!event::that is if no event have been created={'>'}event.count=zero{'<='} )</p>
      <p>YAYI! Now lets create memories. CREATE EVENT</p>
      <p>(render a Link to create an event "<a href="event/create">CREATE EVENT</a>")</p>
    </div>)
  }

export default Home;
