import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  width: 60%;
  margin: 0 auto;
  max-width: 60rem;
  @media (max-width: 60em) {
    align-items: center;
    flex-direction: column-reverse;
  }
`
const Markdown = styled.div`
  flex-grow: 1;
`
const Image = styled.img`
  height: 100%;
  max-width: 15em;
  margin-left: 10%;
  max-height: 15em;
  ${({ imagePosition }) =>
    imagePosition === "left" ? "margin-right:" : "margin-left:"} 10%;
  @media (max-width: 60em) {
    margin: auto 0;
    width: 50%;
  }
`

export class ContentBullet extends React.Component {
  render() {
    const { image, markdown, imagePosition } = this.props.data
    return (
      <Container reverse={imagePosition === "left"}>
        <Markdown>
          <ReactMarkdown source={markdown} />
        </Markdown>
        <Image imagePosition={imagePosition} src={image} />
      </Container>
    )
  }
}
