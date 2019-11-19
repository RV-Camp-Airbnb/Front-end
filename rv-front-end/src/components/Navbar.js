import React from 'react';
import {Route, Link} from "react-router-dom";
import UserRegistration from './UserRegistration';
import Login from './Login';
import Catalog from './Catalog';
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
    <NavContainer>
      <Logo exact="true" to="/">RV Camp</Logo>
      <Wrapper>
          <StyledLink to="/owners">Owners</StyledLink>
          <StyledLink to="/signup">Sign up</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
      </Wrapper>
    </NavContainer>

    <Route exact="true" path='/' component={Catalog} />
    {/* <Route path='/signup' component={UserRegistration} /> */}
    <Route path="/signup" render={props => (<UserRegistration {...props} />)}/>
    <Route path='/login' component={Login} />
    
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
const Logo = styled(Link)`
  width: 40%;
  margin: 0 auto;
  font-size: 2rem;
  text-decoration: none;
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
  text-decoration: none;
`;