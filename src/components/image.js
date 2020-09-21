import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "slide01.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slide2: file(relativePath: { eq: "slide02.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data

  // if (!data?.slide2?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  // return <Img fluid={data.slide2.childImageSharp.fluid} />
}

const Slide01 = () => {

  if (!Image()?.slide1?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={Image().slide1.childImageSharp.fluid} />
}

const Slide02 = () => {

  if (!Image()?.slide2?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={Image().slide2.childImageSharp.fluid} />
}

export {
  Slide01,
  Slide02
}
