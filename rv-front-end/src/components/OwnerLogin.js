import React, {useState} from 'react'
import styled from 'styled-components'
import { owners } from '../dummyData';

const OwnerLogin = (props) => {
  const [loggedOwner, setLoggedOwner] = useState({
    email: '',
    password: ''
  });

  const dummyToken = 'b5cbc9aea7bc3a68f8da9e54f887a030839e4780d6117bc0'

  const handleChanges = e => {
    console.log('changing', e.target.value)
    setLoggedOwner({
      ...loggedOwner,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    const currentOwner = owners.find(curr => curr.email === loggedOwner.email && curr.password === loggedOwner.password);
    console.log('currentOwner', currentOwner);

    localStorage.setItem('ownerToken', currentOwner.ownerToken);
    props.history.push(`/owners/${currentOwner.id}`);
  }

  console.log('owner properties PROPS' props)

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
        <Input type="email" name='email' placeholder='Email' value={loggedOwner.email} onChange={handleChanges} />
        <Input type="password" name='password' placeholder='Password' value={loggedOwner.password} onChange={handleChanges} />
        <Button>Log in</Button>
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
