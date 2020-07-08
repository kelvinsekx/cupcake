import React from "react"

// import { logout } from "../service/auth"
// import {Link} from "gatsby"
import Layout from "../components/layout"



import SEO from "../components/seo"

const IndexPage = function ({ path }) {
  
return (
  <Layout>
    <SEO title="galaxy" />
    
    <div> 
      <main>
        <div style={{marginLeft: "25px"}}>
        <div style={{marginTop: '5%'}}>
          <label>Wedding</label>
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

        <div style={{marginTop: '5%'}}>
          <label>Clubs and Party</label>
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

        <div style={{marginTop: '5%'}}>
          <label>Religious</label>
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

        <div style={{marginTop: '5%'}}>
          <label>Education and Others</label>
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
      </div>
      <div>
        <p>This is our event...</p>
        <p>We love events</p>
        <p>This is where events LIVE</p>
      </div>
      <div>
        <div>"A video element that shows one or two video elements from our events. ;;it updates at random;;"</div>
        <div>
          "components for reason to sue cupcake"
          <p>Make events fast, FAST in every way possible</p>
          <p>We have a VISION</p>
        </div>
        <div>PRE-footer, on where we post your videos and photos. Our privacy statement and hwo we make your event BIG </div>
      </div>
      </main>
    </div>
  </Layout>
)
}

export default IndexPage
