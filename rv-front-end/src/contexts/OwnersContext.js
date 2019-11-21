import React, {useState, createContext} from 'react';
import { owners } from '../dummyData';

export const OwnersContext = createContext();

export const OwnersProvider = () => {
  const [activeOwner, setActiveOwner] = useState({
    id: '',
    password: ''
  });

  return (
    <OwnersContext.Provider value={[activeOwner, setActiveOwner]}>
      {props.children}
    </OwnersContext.Provider>
  )
}
