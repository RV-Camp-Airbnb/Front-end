// import React, {useState, useEffect} from 'react'
// import {Route, Link} from "react-router-dom";
// import styled from 'styled-components';

// const LoginButton = () => {
//   const [logged, setLogged] = useState(false)

//   const handleLogout = () => {
//     localStorage.clear("ownerId");
//     setLogged(false);
//   }

//   useEffect(() => {
//     if (localStorage.getItem("ownerId") !== "null")
//     setLogged(true);
//   },[])

//   // localStorage.getItem("ownerId") !== "null"

//   if (logged) {
//     return (
//         <StyledLink to="/login" onClick={handleLogout} >Log out</StyledLink>
//     )
//   } else {
//     return (
//         <StyledLink to="/login">Log in</StyledLink>
//     )
//   }
// }

// export default LoginButton;

// // STYLED COMPONENTS


// const StyledLink = styled(Link)`
//   display:flex;
//   flex-direction: column;
//   align-items: space-between;
//   text-decoration: none;
// `;