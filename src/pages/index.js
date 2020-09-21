import React from "react"
import { Jumbotron, Carousel } from "react-bootstrap"

import Layout from "../components/layout"
import { Slide01, Slide02} from "../components/image"
import SEO from "../components/seo"

import Cloud from "../images/cloud-icon.svg"
import Data from "../images/data-icon.svg"
import Ml from "../images/ml-icon.svg"
import Smart from "../images/smart-icon.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron className="pt-0">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <Slide01 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide02 />
        </Carousel.Item>
      </Carousel>
      <div className="services">
        <h1>We advise, design and implement :</h1>
        <nav className="nav flex-column">
          <a className="nav-link active" href="#home">
            <img src={Cloud} alt="cloud" />
            Cloud Infrastructure Automation</a>
          <a className="nav-link" href="#home">
            <img src={Data} alt="cloud" />
            Data Engineering platforms</a>
          <a className="nav-link" href="#home">
            <img src={Ml} alt="cloud" />
            ML and AI solutions</a>
          <a className="nav-link disabled" href="#home">
            <img src={Smart} alt="cloud" />
            Smart Web and Mobile Applications</a>
        </nav>
      </div>
    </Jumbotron>
  </Layout>
)

export default IndexPage
