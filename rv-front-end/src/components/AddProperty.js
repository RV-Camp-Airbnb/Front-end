import React, {useState, useEffect, useContext} from 'react'
import { PropertiesContext } from '../contexts/PropertiesContext';
import styled from 'styled-components';
// import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

const AddProperty = (props) => {
  const [properties, setProperties] = useContext(PropertiesContext);
  const [submitted, setSubmitted] = useState(false)
  const [newProperty, setNewProperty] = useState({
    // id: '',
    owner_id: localStorage.getItem('ownerId'),
    name: '',
    password: localStorage.getItem('ownerToken'),
    description: '',
    site: '',
    state: '',
    address: '',
    has_electicty: false,
    has_water: false,
    has_toilets: false,
    price: '',
    img_url: ''
  });
  

  const handleChanges = e => {
    setNewProperty({
      ...newProperty,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post("https://cors-anywhere.herokuapp.com/https://deplyrvpark.herokuapp.com/api/landOwner/register", newProperty )
    .then(res => {
      setNewProperty(res.data)
      setSubmitted(true)
    })

    console.log('property created!');
    
  }

  useEffect(() => {
    if (submitted === true ) {
      console.log('submitted', submitted);
      props.history.push(`/owners/${localStorage.getItem("ownerId")}`)
    }
  }, [submitted])

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
        {/* <Input type="text" name='id' placeholder='id' value={newProperty.id} onChange={handleChanges} />   */}
        <Input type="hidden" name='owner_id' value={localStorage.getItem('ownerId')} onChange={handleChanges} />
        <Input type="text" name='name' placeholder='name' value={newProperty.name} onChange={handleChanges} />
        <Input type="hidden" name='password' value={localStorage.getItem('ownerToken')} onChange={handleChanges} />
        <Input type="text" name='description' placeholder='description' value={newProperty.description} onChange={handleChanges} />
        <Input type="number" name='site' placeholder='site' value={newProperty.site} onChange={handleChanges} />
        <Input type="text" name='state' placeholder='state' value={newProperty.state} onChange={handleChanges} />
        <Input type="text" name='address' placeholder='address' value={newProperty.address} onChange={handleChanges} />
        <Input type="number" name='price' placeholder='price' value={newProperty.price} onChange={handleChanges} />
        <Input type="text" name='img_url' placeholder='img_url' value={newProperty.img_url} onChange={handleChanges} />
        <label><Input type="checkbox" name='has_electicty' value={newProperty.has_electicty} onChange={handleChanges} />Electricity</label>
        <label><Input type="checkbox" name='has_water' value={newProperty.has_water} onChange={handleChanges} />Water</label>
        <label><Input type="checkbox" name='has_toilets' value={newProperty.has_toilets} onChange={handleChanges} />Toilets</label>
        <Button>Add</Button>
      </Form>
      
    </Wrapper>
  )
}

export default AddProperty


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
