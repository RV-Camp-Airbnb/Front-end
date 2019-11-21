import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import PropertyDetails from './PropertyDetails'
import styled from 'styled-components'
const StyledDiv = styled.div`
width: 70%; 
margin: 10px 10%;

`
const StyledImg = styled.img`
height: 200px; 
`

const CatalogCard = (props) => {
    
    return (
      <StyledDiv>
         <StyledImg alt='' src ={props.data.img_url}/>
         <h1>{props.data.name}</h1>
          <h2>{props.data.address}</h2>
          <p>{props.data.description}</p>
      </StyledDiv>
    )
  }
  
  export default CatalogCard
  