import React from "react"

// import { logout } from "../service/auth"
// import {Link} from "gatsby"

import CarosLink from "../components/caros-link"
import Hook from "../components/hook"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = function ({ path }) {
  return (
    <Layout>
      <SEO title="galaxy" />
      <div>
        <main>
          <CarosLink />
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
