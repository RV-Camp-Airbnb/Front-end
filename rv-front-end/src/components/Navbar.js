import React from 'react';
import {Route, Link} from "react-router-dom";
import UserRegistration from './UserRegistration';
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
    <NavContainer>
      <Logo>RV Camp</Logo>
      <Wrapper>
        <StyledLink>
          <Link to="/host">Host</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/signup">Sign up</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/login">Log in</Link>
        </StyledLink>
      </Wrapper>
    </NavContainer>

    <Route path='/signup' component={UserRegistration} />
    </>
  )
}

export default Navbar


// STYLED COMPONENTS

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  width: 80%;
  margin: 0 auto;
`
const Logo = styled.div`
  width: 40%;
  margin: 0 auto;
  font-size: 2rem;
`
const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: 60%;
`
const StyledLink = styled(Link)`
  display:flex;
  flex-direction: column;
  align-items: space-between;
`;