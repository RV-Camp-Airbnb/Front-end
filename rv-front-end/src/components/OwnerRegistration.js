import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext'

const OwnerRegistration = (props) => {
  const [auth, setAuth] = useContext(AuthContext);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [loggedOwner, setLoggedOwner] = useState({
    ownername: '',
    password: ''
  });

  const handleChanges = e => {
    setLoggedOwner({
      ...loggedOwner,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("https://cors-anywhere.herokuapp.com/https://deplyrvpark.herokuapp.com/api/owner/register", loggedOwner )
    .then(res => {
      setLoggedIn(true);
      setAuth([{id: res.data[0].id, token: res.data[0].password}] ) 
      localStorage.setItem("ownerToken", res.data[0].password );
      localStorage.setItem("ownerId", res.data[0].id );      
    })
  }

  useEffect(() => {
    if (auth.length > 0) {
      console.log('auth.length', auth.length);
      props.history.push(`/owners/${localStorage.getItem("ownerId")}`)
    }
  }, [auth])

    // isLoggedIn ? 
    // (props.history.push(`/owners/${localStorage.getItem("ownerId")}`)) :
    // (console.log('user not valid'))
  

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
        <Input type="text" name='ownername' placeholder='Owner name' value={loggedOwner.ownername} onChange={handleChanges} />
        <Input type="password" name='password' placeholder='Password' value={loggedOwner.password} onChange={handleChanges} />
        <Button>Join RV Camp</Button>
        <Link to="login">Already have an account?</Link>
      </Form>
      
    </Wrapper>
  )
}

export default OwnerRegistration


// STYLED COMPONENTS

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 30%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  margin-top: 10%;
  padding: 2%;
`

const Input = styled.input`
  padding: 2%;
  margin: 2%;
  font-size: 1.5rem;
  border-radius: 5px;
`

const Button = styled.button`
  padding: 2%;
  margin: 2%;
  background: tomato;
  font-size: 1.5rem;
  border-radius: 5px;
`
