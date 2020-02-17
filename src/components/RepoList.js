import React from "react";
import styled from 'styled-components'

import RepoItem from "./RepoItem";

import { RepoCard } from './styles.js'

const RepoList = ({ repos }) => (
  <RepoCard>
    {repos.map(repo => (
    <RepoItem repo={repo} />
    ))}
  </RepoCard>

);

export default RepoList;
