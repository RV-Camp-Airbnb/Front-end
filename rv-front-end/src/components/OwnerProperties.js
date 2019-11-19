import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { properties } from '../dummyData';
// import axios from 'axios';

const OwnerProperties = (props) => {
  const [ownerProperties, setOwnerProperties] = useState(properties)

  console.log('owner properties PROPS' props)

  // const getOwnerProperties = properties.filter(curr => curr.owner_id === loggedOwner.email && curr.password === loggedOwner.password);
  

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Sites</th>
            <th>State</th>
            <th>Address</th>
            <th>Price</th>
            <th colspan="3"></th>
          </tr>
        </thead>

        <tbody>
          {properties.map(property => (
            <tr>
            <td><Image src={property.img_url} /></td>
            <td>{property.name}</td>
            <td>{property.sites}</td>
            <td>{property.state}</td>
            <td>{property.address}</td>
            <td>{`$ ${property.price}`}</td>
            <td><button>View</button></td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
          ))}

          
        </tbody>
      </Table>
      
    </div>
  )
}

export default OwnerProperties


// STYLES COMPONENTS

const Table = styled.table`
  width: 90%;
  margin: 5% auto;
`

const Image = styled.img`
  width: 200px;
  height: 150px;
`