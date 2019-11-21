import React, {useState, useEffect, createContext} from 'react'
import { propertiesData } from '../dummyData';
import axios from 'axios';

export const PropertiesContext = createContext();

export const PropertiesProvider = (props) => {
  // const [properties, setProperties] = useState(propertiesData)
  const [properties, setProperties] = useState([])

  useEffect(()=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://deplyrvpark.herokuapp.com/api/landOwner')
    .then(res => {
      setProperties(res.data)
    })
    .catch(err => { console.log('error')})
  },[])

  

  return (
    <PropertiesContext.Provider value={[properties, setProperties]}>
      {props.children}
    </PropertiesContext.Provider>
  )
}

