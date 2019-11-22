import React from 'react';

const PropertyDetails = (props) => {
  return (
    <div>
     <img alt='' src={props.data.img_url}/>
         <h1>{props.location.name}</h1>
         <h2>{props.location.state}</h2>
          <h2>{props.location.address}</h2>

          <p>{props.location.description}</p>
          
          <div>
            <h2>Utilitys</h2>
            <h3>Electric hook ups: {props.location.has_electicty ? 'Yes' : 'No'}</h3>
            <h3>Water Hook ups: {props.location.has_water ? 'Yes' : 'No' }</h3>
            <h3>Has Restrooms: {props.location.has_toilets ? 'Yes' : 'No' }</h3>
          </div>
         <button>Contact to Book a campsite</button>
    </div>
  )
}

export default PropertyDetails
