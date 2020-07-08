import React from "react"

const CreateEvent = () =>{
    return (
      <div>
        <div>NICE MOVING SVG</div>
        <p>Create Event</p>
        <div>
          <form>
            <div>
              <label>
               <input placeholder="event name"/>
              </label>
            </div>
            <div>
            <label>
              <input placeholder="event category"/>
            </label>
            </div>
            <div>
            <label>
              <input placeholder="population range"/>
            </label>
            </div>
            <div>
            <label>
              <input placeholder="start date"/>
            </label>
            </div>
            <div>
            <label>
              <input placeholder="end date"/>
            </label>
            </div>
          </form>
        </div>
        <hr/>
        <div>
          <p>Assistance with sign up, call our CUSTOMER CARE</p>
        </div>
      </div>
    )
  } 

export default CreateEvent;