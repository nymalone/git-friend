import React from "react";
import styled from 'styled-components'

const Navbar = styled.section`
  background: #8372AA;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px
`

const Img = styled.img`
  width: 59px;
  height: 69px;

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
  <div className="repoListContainer">
     <Navbar>
      <Img src='./images/logo.png' alt='logo' />
      <Title>
      GIT • F • R • I • E • N • D • S •
      </Title>
    </Navbar>
  </div>
);

export default Header;
