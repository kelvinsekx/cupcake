import React from "react"

// import { logout } from "../service/auth"
// import {Link} from "gatsby"
import Hook from "../components/hook"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = function ({ path }) {
  const Array = [
    "Wedding",
    "Club and Party",
    "Religious",
    "Education and Others",
  ]
  return (
    <Layout>
      <SEO title="galaxy" />

      <div>
        <main>
          <div style={{ marginLeft: "3vw" }}>
            {Array.map(each => (
              <div style={{ marginTop: "5%" }}>
                <label>{each} </label><div className="arrow">&#10230;</div>
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
            ))}
          </div>
          <Hook />
          <div className="bako">
            <div style={{ marginTop: "5%" }} className="ab">
              <div className="containerVert1">
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
            <div className="abc">
              <div>
              <p>We have a VISION:</p>
              <p>That you "Make events fast, FAST in every way that matters"</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
