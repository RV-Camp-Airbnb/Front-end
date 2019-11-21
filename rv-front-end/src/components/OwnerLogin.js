import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext'

const OwnerLogin = (props) => {
  const [auth, setAuth] = useContext(AuthContext);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [loggedOwner, setLoggedOwner] = useState({
    username: '',
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
    axios.post("https://cors-anywhere.herokuapp.com/https://deplyrvpark.herokuapp.com/api/auth/login", loggedOwner )
    .then(res => {
      setLoggedIn(true);
      setAuth([{id: 1, token: res.data.token}] ) /* ID hardcoded as a placeholder */
      localStorage.setItem("ownerToken", res.data.token );
      console.log(localStorage.getItem("ownerToken"))
    })
  }

  useEffect(() => {
    if (auth.length > 0) {
      console.log('auth.length', auth.length)
      props.history.push(`/owners/${auth[0].id}`)
    }
  }, [auth])



  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
        <Input type="text" name='username' placeholder='Username' value={loggedOwner.username} onChange={handleChanges} />
        <Input type="password" name='password' placeholder='Password' value={loggedOwner.password} onChange={handleChanges} />
        <Button>Log in</Button>
        <Link to="signup">Don't have an account?</Link>
      </Form>
      
    </Wrapper>
  )
}

export default OwnerLogin


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
