import React, {useState, createContext} from 'react'
import { propertiesData } from '../dummyData';

export const PropertiesContext = createContext();

export const PropertiesProvider = (props) => {
  const [properties, setProperties] = useState(propertiesData)

  return (
    <PropertiesContext.Provider value={[properties, setProperties]}>
      {props.children}
    </PropertiesContext.Provider>
  )
}

