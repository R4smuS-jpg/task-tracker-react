import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;

  background-color: #379683;

  padding-top: 1.7em;
  padding-bottom: 1.7em;

  margin-bottom: 30px;

  min-width: 100vw;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const AnotherHeaderTitle = styled.h1`
  font-size: 3em;
`;

const HeaderTitle = styled.h1`
  font-size: 3em;

  margin-left: 1em;
  margin-right: 1em;
`;

const HeaderTitleWrap = styled.div`
  display: flex;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderTitleWrap>
        <HeaderTitle>
          <StyledLink to="/sign-in">Sign In</StyledLink>
        </HeaderTitle>

        <AnotherHeaderTitle>
          <StyledLink to="/sign-up">Sign Up</StyledLink>
        </AnotherHeaderTitle>
      </HeaderTitleWrap>

      <HeaderTitle>
        <StyledLink to="/">Task-Tracker</StyledLink>
      </HeaderTitle>
    </StyledHeader>
  );
}

export default Header;
