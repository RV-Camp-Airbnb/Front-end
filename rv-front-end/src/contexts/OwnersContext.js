import React, {useState, createContext} from 'react';
import { owners } from '../dummyData';

export const OwnersContext = createContext();

export const OwnersProvider = () => {
  const [loggedOwner, setLoggedOwner] = useState({
    email: '',
    password: ''
  });

  return (
    <OwnersContext.Provider value={[ownerProperties, setOwnerProperties]}>
      {props.children}
    </OwnersContext.Provider>
  )
}
