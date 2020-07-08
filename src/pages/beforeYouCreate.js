import React from "react"
import {Link } from "gatsby"

const BeforeYouCreate = ()=>{
    return (
        <div>
            <p>
                "Please, before you CREATE"
            </p>
            <p>
                blablabla
            </p>
            <Link to="/event">VERIFY ME</Link>

        </div>
    )
}

export default BeforeYouCreate;