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



const Header = ({ repos }) => (
  <div>
     <Navbar>
      <Img src='./images/friends2.png' alt='logo' />
    </Navbar>
  </div>
);

export default Header;
