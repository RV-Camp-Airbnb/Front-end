import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { PropertiesContext } from '../contexts/PropertiesContext';
import { AuthContext } from '../contexts/AuthContext'
import { Route , Link } from "react-router-dom";
import axios from 'axios';
import UpdateProperty from './UpdateProperty'; 

const OwnerProperties = (props) => {
  const [properties, setProperties] = useContext(PropertiesContext);
  const [auth] = useContext(AuthContext);
  const [submitted, setSubmitted] = useState(false)
  const [ownerProperties, setOwner, Properties] = useState()

  const currentOwnersProperties = properties.filter(curr => {
    // return curr.owner_id === Number(props.match.params.id);
    return curr.owner_id === localStorage.getItem('ownerId');
  });

  const handleDelete = e => {
    axios.delete(`https://cors-anywhere.herokuapp.com/https://deplyrvpark.herokuapp.com/api/landOwner/${e.target.value}` )
    .then(res => {
      setProperties(res.data);
      setSubmitted(true);
    })
    console.log('property deleted!', e.target.value);
  }

  useEffect(() => {
    if (submitted === true ) {
      console.log('submitted', submitted);
      // props.history.push(`/owners/${localStorage.getItem("ownerId")}`)
    }
  }, [submitted])

  return (
    <div>
      <h1>Owner's Properties</h1>
      <Link exact to={`/owners/${localStorage.getItem('ownerId')}/new`}>Add property</Link>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Sites</th>
            <th>State</th>
            <th>Address</th>
            <th>Price</th>
            <th colSpan="3"></th>
          </tr>
        </thead>

        <tbody>
          {currentOwnersProperties.map(property => (
            <tr>
            <td><Image src={property.img_url} /></td>
            <td>{property.name}</td>
            <td>{property.sites}</td>
            <td>{property.state}</td>
            <td>{property.address}</td>
            <td>{`$ ${property.price}`}</td>
            <td><Link exact to={`${localStorage.getItem('ownerId')}/${property.id}`}><button>Edit</button></Link></td>
            {/* <td><button onClick={() => props.history.push(`/owners/${localStorage.getItem('ownerId')}/${property.id}`)}>Edit</button></td> */}
            <td><button value={property.id} onClick={handleDelete}>Delete</button></td>
          </tr>
          ))}

          
        </tbody>
      </Table>
      <Route exact path=':property_id' component={UpdateProperty} />
      
    </div>
  )
}

export default OwnerProperties;


// STYLES COMPONENTS

const Table = styled.table`
  width: 90%;
  margin: 5% auto;
`

const Image = styled.img`
  width: 200px;
  height: 150px;
`
