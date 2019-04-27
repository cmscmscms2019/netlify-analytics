import React from "react"
import styled from "styled-components"
import { Header, Nav, ContentSection, CtaSection, Footer } from "../components"
import { graphql } from "gatsby"
import "./product.css"

const Container = styled.div`
  background-color: ##ffffff;
  color: #fff;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Container>
      <Nav />
      <Header data={frontmatter.header} />
      {frontmatter.sections.map(section => {
        if (section.type === "content") {
          return <ContentSection key={section.header} data={section} />
        } else if (section.type === "callToAction") {
          return <CtaSection key={section.header} data={section} />
        } else {
          return null
        }
      })}
      <Footer />
    </Container>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        header {
          image
          markdown
        }
        sections {
          type
          header
          markdown
          linkText
          linkUrl
          image
          bullets {
            markdown
            imagePosition
            image
          }
        }
      }
    }
  }
`
