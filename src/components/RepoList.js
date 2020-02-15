import React from "react";
import styled from 'styled-components'

import RepoItem from "./RepoItem";

const RepoCard = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`

const RepoList = ({ repos }) => (
  <RepoCard>
    {repos.map(repo => (
    <RepoItem repo={repo} />
    ))}
  </RepoCard>

);

export default RepoList;
