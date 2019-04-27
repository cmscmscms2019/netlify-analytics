import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: -webkit-linear-gradient(left, #131f52 0%, #0f1943 80%);
  z-index: 10;
`
const NavWrapper = styled.div`
  z-index: 10;
  position: relative;
  box-sizing: content-box;
  margin: 0 auto;
  max-width: 60rem;
  @media (max-width: 60em) {
    display: none;
  }
  display: flex;
  align-items: center;
  padding: 0.6em;
  z-index: 1;
`
const HR = styled.div`
  margin: auto;
  height: 2px;
  width: 80%;
  display: block;
  background: #b8dfffc9;
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(#131f52),
    to(#101b48),
    color-stop(50%, #b8dfffc9)
  );
  position: relative;
  z-index: 9;
`
const Logo = styled.a``

const LogoText = styled.p`
  font-weight: 500;
  font-size: 35px;
  color: white;
  margin: 0 0 0 7px;
  opacity: 0.8;
`
const NavListItemsLeft = styled.ul`
  list-style-type: none;
  flex: 1;
  margin: 5px;
`
const NavListItemsRight = styled.ul`
  list-style-type: none;
  margin: 5px;
`
const NavListItem = styled.li`
  font-weight: 400;
  display: inline;
  margin: 5px;
  font-size: 20px;
  opacity: 0.8;
`
const VR = styled.div`
  display: inline;
  margin: 5px;
  border-right: 2px solid #fff;
`
export class Nav extends React.Component {
  render() {
    return (
      <Container>
        <NavWrapper>
          <Logo>
            <img alt="logo" src="/assets/logomark.svg" />
          </Logo>
          <LogoText>netlify</LogoText>
          <NavListItemsLeft>
            <NavListItem>
              <a href="https://www.netlify.com/products">Products</a>
            </NavListItem>
            <NavListItem>
              <a href="https://www.netlify.com/pricing">Pricing</a>
            </NavListItem>
            <NavListItem>
              <a href="https://www.netlify.com/docs">Docs</a>
            </NavListItem>
            <NavListItem>
              <a href="https://www.netlify.com/blog">Blog</a>
            </NavListItem>
          </NavListItemsLeft>
          <NavListItemsRight>
            <NavListItem>
              <a href="https://www.netlify.com/enterprise">Contact Sales</a>
            </NavListItem>
            <VR />
            <NavListItem>
              <a href="https://app.netlify.com">Login</a>
            </NavListItem>
            <NavListItem>
              <a href="https://app.netlify.com/signup">Sign Up</a>
            </NavListItem>
          </NavListItemsRight>
        </NavWrapper>
        <HR />
      </Container>
    )
  }
}
