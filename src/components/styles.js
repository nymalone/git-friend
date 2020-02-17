import styled from 'styled-components'

export const Navbar = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px
`

export const Img = styled.img`
  width: 630px;
  padding-top: 20px;
`

export const SearchBar = styled.input`
  width: 600px;
  border: 1px solid #F2D13B;
  border-right: none;
  padding: 5px;
  height: 30px;
  border-radius: 20px 0 0 20px;
  outline: none;
  color: black;
  font-size: 15px;
  padding-left: 10px; 
`

export const SearchButton = styled.button`
  width: 40px;
  height: 42px;
  border: 2px solid #F2D13B;
  background: #F2D13B;
  text-align: center;
  color:  #0679cf;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  font-size: 15px;

`

export const Title = styled.h4`
  color: white;
  font-size: 38px;
  text-shadow: 1px 0 0 #F2D13B, -1px 0 0 #F2D13B, 0 1px 0 #F2D13B, 0 -1px 0 #F2D13B, 1px 1px #F2D13B, -1px -1px 0 #F2D13B, 1px -1px 0 #F2D13B, -1px 1px 0 #F2D13B;
  font-family: Verdana;
`

export const Error = styled.p`
  color: red;
  font-weight: bolder;
  font-size: 20px;
`

export const Body = styled.section`
  background: #8372AA;
`

export const RepoCard = styled.div`
  display: flex;
  padding: 30px;
  height: auto;
  flex-wrap: wrap;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 28%;
  background: white;
  height: auto;
  padding: 16px;
  margin: 10px;
  border-radius: 5px;
  
  &:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`
export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #8372AA;
  text-decoration: none;
`
export const Link = styled.a`
  text-decoration: none;
`

export const Stars = styled.p`
  font-size: 23px;
  font-weight: bold;
  color:  #F2D13B;
  text-decoration: none;
`