import React, {useContext} from 'react';
import styled from 'styled-components';
import { PropertiesContext } from '../contexts/PropertiesContext';
import { AuthContext } from '../contexts/AuthContext'
import { Link } from "react-router-dom";

const OwnerProperties = (props) => {
  const [properties, setProperties] = useContext(PropertiesContext);
  const [auth] = useContext(AuthContext);

  const currentOwnersProperties = properties.filter(curr => {
    // return curr.owner_id === Number(props.match.params.id);
    return curr.owner_id === localStorage.getItem('ownerId');
  });
  
  console.log('currentOwnersProperties', currentOwnersProperties);

  return (
    <div>
      <h1>Owner's Properties</h1>
      <Link to={`${localStorage.getItem('ownerId')}/new`}>Add property</Link>
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