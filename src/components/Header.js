import styled from 'styled-components'
import React from 'react';

const HeaderLogin = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;

  background-color: #379683;
  
  padding: 1.5em 0em;
  min-width: 100vw;
`

const HeaderTitle = styled.h1`
  font-size: 3em;

  margin: 0em 1em;
`

function Header({children}) {
  return (  
    <HeaderLogin>
      <HeaderTitle>{children}</HeaderTitle>
      <HeaderTitle>Task-Tracker</HeaderTitle>
    </HeaderLogin>
  );
}

export default Header;
