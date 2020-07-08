import React from "react"

import {handleAuthentication} from "../service/auth"

const Callback = ()=>{
    handleAuthentication()

    return <div>
        <p>Loading...<br/> Wait a sec.</p>
        </div>
}

export default Callback;