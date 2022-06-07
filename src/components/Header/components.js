import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;

  background-color: #379683;

  padding-top: 1.7em;
  padding-bottom: 1.7em;

  margin-bottom: 1.4em;

  min-width: 100vw;
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const AnotherHeaderTitle = styled.h1`
  font-size: 3em;
`;

export const HeaderTitle = styled.h1`
  font-size: 3em;

  margin-left: 1em;
  margin-right: 1em;
`;

export const HeaderTitleWrap = styled.div`
  display: flex;
`;