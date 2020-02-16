import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 27%;
  background: transparent;
  height: 90px;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 8px 8px 10px #F2D13B;

  &:hover {
  box-shadow: 8px 8px 10px white;
  }
`
const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #F2D13B;
  text-decoration: none;
`
const Link = styled.a`
  text-decoration: none;
`

const Stars = styled.p`
  font-size: 19px;
  font-weight: bold;
  color:  #F2D13B;
  text-decoration: none;
`

const RepoItem = ({ repo }) => (
  <Card>
  <Link
   href={repo.html_url}
   key={repo.id}
   className="repoItemContainer"
   target="_blank"
   rel="noopener noreferrer"
  >
    <Name>{repo.name}</Name>
    <Stars>
    <span role="img" aria-label="star">⭐</span> {repo.stargazers_count}
    </Stars>
    

  </Link>
  </Card>
);



export default RepoItem;
