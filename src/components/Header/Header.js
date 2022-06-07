import React from "react";
import { AnotherHeaderTitle, HeaderTitle, HeaderTitleWrap, StyledHeader, StyledLink } from "components/Header/components";

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
