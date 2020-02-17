import React from "react";

import { Title, SearchBar, SearchButton, Error } from "./styles.js";

const Form = ({ user, loading, error, buttonAction, changeUser }) => (
  <div>
    <Title>Type your friends names and check their repos</Title>
    <SearchBar
      type="text"
      value={user}
      placeholder="Github username"
      onChange={e => changeUser(e.target.value)}
    />
    <SearchButton onClick={buttonAction}>Go!</SearchButton>
    <Error>{error}</Error>
  </div>
);

export default Form;
