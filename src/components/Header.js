import React from "react";

import { Navbar, Img } from "./styles.js";

const Header = ({ repos }) => (
  <div>
    <Navbar>
      <Img src="./images/friends2.png" alt="logo" />
    </Navbar>
  </div>
);

export default Header;
