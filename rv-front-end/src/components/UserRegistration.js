import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

const UserRegistration = (props) => {
  const [newUser, setNewUser] = useState({
    // firstname: '',
    // lastname: '',
    email: '',
    password: '',
    // zipcode: ''
  })

  const dummyToken = 'b5cbc9aea7bc3a68f8da9e54f887a030839e4780d6117bc0'

  const handleChanges = e => {
    console.log('changing', e.target.value)
    setNewUser({
      ...newUser,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('token', dummyToken);
    console.log('props.history', props.history);
    props.history.push('/');
  }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axiosWithAuth.get('https://cuylite.herokuapp.com/api/users', newUser)
  //   .then(res => {
  //     console.log("axios res", res);
  //     // setStatus(res.data);
  //     // props.history.push("/");
  //   })
  //   .catch(err => console.log("somethingswrongsignup", err));


    // localStorage.setItem('token', dummyToken);
    // console.log('props.history', props.history);
    // props.history.push('/');
  // }


  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
        {/* <Input type="text" name='firstname' placeholder='First name' value={newUser.firstname} onChange={handleChanges} /> */}
        {/* <Input type="text" name='lastname' placeholder='Last name' value={newUser.lastname} onChange={handleChanges} /> */}
        <Input type="email" name='email' placeholder='Email' value={newUser.email} onChange={handleChanges} />
        <Input type="password" name='password' placeholder='Password' value={newUser.password} onChange={handleChanges} />
        {/* <Input type="text" name='zipcode' placeholder='Zip code' value={newUser.zipcode} onChange={handleChanges} /> */}
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
