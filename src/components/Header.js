import React from "react";
import styled from 'styled-components'

const Navbar = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px
`

const Img = styled.img`
  width: 580px;
  padding-top: 20px;
`

const Title = styled.h4`
  font-size: 32px;
  color: #F2D13B;
  height: 60px;
  font-weight: bolder;
  margin: 0;
  margin-left: 13px;
  padding-top: 20px;
`

const Header = ({ repos }) => (
  <div>
     <Navbar>
      <Img src='./images/friends2.png' alt='logo' />
      {/* <Title>
      GIT • F • R • I • E • N • D • S •
      </Title> */}
    </Navbar>
  </div>
);

export default Header;
