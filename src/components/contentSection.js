import React from "react"
import styled from "styled-components"
import { ContentBullet } from "./contentBullet"

const Container = styled.div`
  margin-top: 50px;
  padding: 2.5em;
  display: flex;
  flex-direction: column;
`
const Header = styled.h2`
  color: #000;
  text-align: center;
`
export class ContentSection extends React.Component {
  render() {
    const { bullets, header } = this.props.data
    return (
      <Container>
        <Header>{header}</Header>
        {bullets.map(bullet => (
          <ContentBullet data={bullet} />
        ))}
      </Container>
    )
  }
}
