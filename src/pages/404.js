import React from "react"
import { Jumbotron } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Jumbotron className="pt-0">
      <h1 style={{
        marginTop: `10rem`
      }}>404: Not Found</h1>
      <p style={{
        marginBottom: `20rem`
      }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Jumbotron>
  </Layout>
)

export default NotFoundPage
