import React from "react"
import styled from "styled-components"

const Container = styled.div`
  color: rgba(14, 30, 37, 0.38);
  padding-bottom: 2.618em;
  text-align: center;

  @media (max-width: 60em) {
    align-items: center;
    flex-direction: column;
  }
`
const HR = styled.div`
  margin: 25px 0;
  height: 1px;
  background: black;
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(white),
    to(white),
    color-stop(50%, black)
  );
`

const Topcontent = styled.div`
  padding-top: 2.618em;
`
const Nav = styled.div`
  margin: 1em auto 0;
  max-width: 29.03em;
  display: flex;
`
const Ul = styled.ul`
  padding: 0;
  list-style: none;
  line-height: 2;
  margin: 1em 0;
  flex: 1;
  margin-bottom: 0;
`
const Button = styled.a`
  max-width: 200px;
  font-size: 20px;
  background-color: #08b3b3;
  border: none;
  text-decoration: none;
  border-radius: 3px;
  color: #fff;
  padding: 0.382em 1em;
`
const A = styled.a`
  text-decoration: none;
  color: #0e1e25;
  display: block;
  font-weight: 400;
  opacity: 0.54;
  white-space: nowrap;
`
const Cards = styled.div`
  @media (max-width: 60em) {
    flex-direction: column;
    align-items: center;
  }
  display: flex;
  justify-content: center;
  color: black;
`
const Card = styled.div`
  border-top: solid 20px ${props => props.color};
  background-color: ${props => props.background};
  margin: 3em 0 0 3em;
  border-radius: 8px;
  box-shadow: 0 2px 40px rgba(14, 30, 37, 0.16);
  color: ${props => props.text || `rgba(14, 30, 37, 0.8)`};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 16px
  font-weight: 500;
  max-width: 23.224em;
  padding: 1.618em;
  position: relative;
  text-align: left;
  text-shadow: none;
  z-index: 10;
  a {
    font-weight: 500;
    color: #00c2b2;
  }
`
const CTA = styled.div`
  color: black;
`
const Social = styled.div``
export class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Topcontent>
          <h2>The rest of the Netlify Platform</h2>
          <Cards>
            <Card color={"#131F52"}>
              <h3>Netlify Analytics</h3>
              <p>
                A new type of Analytics delivery platform custom designed for
                you
              </p>
              <p>
                <a href="/products/anyalytics">Learn more</a>
              </p>
            </Card>
            <Card color={"#fff"} background={"#0E1E25"} text={"#fff"}>
              <h3>Netlify Dev</h3>
              <p>
                Run our entire platform right on your laptop. Preview it all —
                site generation, functions, and edge logic.
              </p>
              <p>
                <a href="https://www.netlify.com/products/dev">Learn more</a>
              </p>
            </Card>
          </Cards>
          <Cards>
            <Card color={"#4F005E"}>
              <h3>Netlify Edge</h3>
              <p>
                A new type of application delivery network custom designed for
                fast, responsive sites and modern workflows.
              </p>
              <p>
                <a href="https://www.netlify.com/products/edge">Learn more</a>
              </p>
            </Card>
            <Card color={"#020758"}>
              <h3>Netlify Build</h3>
              <p>
                The Git workflow for web development.
                Build,&nbsp;deploy,&nbsp;and manage modern web projects.
              </p>
              <p>
                <a
                  href="https://www.netlify.com/products/build"
                  class="cta-link block-link"
                >
                  Learn more
                </a>
              </p>
            </Card>
          </Cards>
          <CTA>
            <h2>Get started with Netlify</h2>
            <p>Deploy a global scale website in minutes.</p>
            <Button>Get started for free</Button>
          </CTA>
          <HR />
          <a href="https://app.netlify.com/signup">
            <img alt="netlify logo" src="https://cdn.netlify.com/2db89aad1f3f291bd8251255283ce5e272119102/1fc4c/img/press/logos/logomark.svg" />
          </a>
          <Nav>
            <Ul>
              <li>
                <A href="/products" id="cta-footer-products">
                  Products
                </A>
              </li>
              <li>
                <A href="/pricing" id="cta-footer-pricing">
                  Pricing
                </A>
              </li>
              <li>
                <A href="/docs" id="cta-footer-docs">
                  Docs
                </A>
              </li>
              <li>
                <A href="/blog" id="cta-footer-blog">
                  Blog
                </A>
              </li>
            </Ul>
            <Ul>
              <li>
                <A href="/about" id="cta-footer-about">
                  About
                </A>
              </li>
              <li>
                <A href="/careers" id="cta-footer-careers">
                  Careers
                </A>
              </li>
              <li>
                <A href="/press" id="cta-footer-press">
                  Press
                </A>
              </li>
              <li>
                <A href="/open-source" id="cta-footer-opensource">
                  Open source
                </A>
              </li>
            </Ul>
            <Ul>
              <li>
                <A href="/enterprise" id="cta-footer-sales">
                  Sales
                </A>
              </li>
              <li>
                <A href="https://netlifystatus.com/" id="cta-footer-status">
                  Status
                </A>
              </li>
              <li>
                <A href="/support" id="cta-footer-support">
                  Support
                </A>
              </li>
              <li>
                <A
                  href="https://community.netlify.com"
                  id="cta-footer-community"
                >
                  Community
                </A>
              </li>
            </Ul>
          </Nav>
        </Topcontent>
        <Social>
          <Ul />
        </Social>
      </Container>
    )
  }
}
