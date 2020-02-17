import React from "react";
import styled from "styled-components";

import { Card, Link, Name, Stars } from "./styles.js";

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
        <span role="img" aria-label="star">
          ⭐
        </span>{" "}
        {repo.stargazers_count}
      </Stars>
    </Link>
  </Card>
);

export default RepoItem;
