import React, {useState} from 'react'
import styled from 'styled-components'

const UserRegistration = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    zipcode: ''
  })

  const handleChanges = e => {
    console.log('changing', e.target.value)
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted!')

  }

  console.log('user', user)

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
        <Input type="text" name='firstname' placeholder='First name' value={user.firstname} onChange={handleChanges} />
        <Input type="text" name='lastname' placeholder='Last name' value={user.lastname} onChange={handleChanges} />
        <Input type="email" name='email' placeholder='Email' value={user.email} onChange={handleChanges} />
        <Input type="password" name='password' placeholder='Password' value={user.password} onChange={handleChanges} />
        <Input type="text" name='zipcode' placeholder='Zip code' value={user.zipcode} onChange={handleChanges} />
        <Button>Join RV Camp</Button>
      </Form>
      
    </Wrapper>
  )
}

export default UserRegistration

// STYLED COMPONENTS

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 40%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
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
