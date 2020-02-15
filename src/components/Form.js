import React from "react";
import styled from 'styled-components'


const SearchBar = styled.input`
  width: 440px;
  border: 3px solid #F2D13B;
  border-right: none;
  padding: 5px;
  height: 26px;
  border-radius: 12px 0 0 12px;
  outline: none;
  color: black;
  font-size: 15px;
  padding-left: 10px;
 
`

const SearchButton = styled.button`
  width: 40px;
  height: 42px;
  border: 3px solid #F2D13B;
  background: #F2D13B;
  text-align: center;
  color:  #0679cf;
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  font-size: 15px;
  font-weight: bolder;
`

const Title = styled.h4`
  color: #F2D13B;
  font-size: 30px;
`
const Error = styled.p`
  color: red;
  font-weight: bolder;
  font-size: 20px;
`

const Form = ({ user, loading, error, buttonAction, changeUser }) => (
    <div>
      <Title>
        Type your friends names and check their repos
      </Title>
      <SearchBar
         type="text"
         value={user}
         placeholder="Github username"
         onChange={e => changeUser(e.target.value)} 
        />
      <SearchButton onClick={buttonAction}> go</SearchButton >
      <Error>{error}</Error>
    </div>
  );
  
  export default Form;