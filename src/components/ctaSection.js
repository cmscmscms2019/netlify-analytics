import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const Container = styled.div`
  background: -webkit-linear-gradient(left, #131f52 0%, #0f1943 80%);
  background-color: #111a48;
  align-items: center;
  display: flex;
  min-height: 14.354em;
  text-align: left;
`
const Content = styled.div`
  text-align: left;
  max-width: 25em;
  margin: auto;
  @media (max-width: 60em) {
    text-align: center;
    margin: 0 auto 3em;
  }
`
const Image = styled.img`
  max-height: 25em;
  max-width: 25em;
  margin: auto;
  @media (max-width: 60em) {
    display: none;
  }
`
const ColumnImage = styled.img`
  display: none;
  max-height: 25em;
  max-width: 25em;
  margin: auto;
  @media (max-width: 60em) {
    display: block;
    margin: 2em auto;
  }
`
const Items = styled.div`
  display: flex;
  margin: auto;
  @media (max-width: 60em) {
    flex-direction: column;
  }
`
const Link = styled.a`
  max-width: 200px;
  font-size: 20px;
  background-color: #08b3b3;
  border: none;
  text-decoration: none;
  border-radius: 3px;
  color: #fff;
  padding: 0.382em 1em;
`
export class CtaSection extends React.Component {
  render() {
    const { image, markdown, linkText, linkUrl } = this.props.data
    return (
      <Container>
        <Items>
          <Content>
            <ReactMarkdown source={markdown} />
            <ColumnImage src={image} />
            <Link href={linkUrl}>{linkText}</Link>
          </Content>
          <Image src={image} />
        </Items>
      </Container>
    )
  }
}
