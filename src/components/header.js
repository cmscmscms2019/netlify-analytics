import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const Container = styled.div`
  background: 0 0;
  display: flex;
  flex-direction: column;
  height: 12em;
  padding: 0 0 2.618em;
  position: relative;
  margin: auto 10em auto;
  max-width: 60rem;
  @media (max-width: 60em) {
    margin: auto 2em auto;
  }
`
const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  left: 26em;
  pointer-events: none;
  position: absolute;
  top: -6em;
  width: 100%;
  z-index: -9;
`

const HeaderBlurb = styled.div`
  text-align: left;
  margin-left: 0;
  max-width: 26em;
`
export class Header extends React.Component {
  render() {
    const { markdown, image } = this.props.data
    return (
      <Container>
        <Section>
          <img alt="header" src={image} />
        </Section>
        <HeaderBlurb>
          <ReactMarkdown source={markdown} />
        </HeaderBlurb>
      </Container>
    )
  }
}
