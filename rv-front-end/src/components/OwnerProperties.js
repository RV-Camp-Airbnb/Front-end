import React, {useContext} from 'react';
import styled from 'styled-components';
import { PropertiesContext } from '../contexts/PropertiesContext'

const OwnerProperties = (props) => {
  const [properties, setProperties] = useContext(PropertiesContext)

  const currentOwnersProperties = properties.filter(curr => {
    return curr.owner_id === Number(props.match.params.id)
  });
  
  console.log('currentOwnersProperties', currentOwnersProperties);

  return (
    <div>
      <h1>Owner's Properties</h1>
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