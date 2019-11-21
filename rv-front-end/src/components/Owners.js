import React from 'react'
import {Route} from "react-router-dom";
import OwnerProperties from './OwnerProperties';
import OwnerPrivateRoute from './OwnerPrivateRoute';

const Owners = () => {

  return (
    <div>
      <h1>hello from Owners</h1>
      <OwnerPrivateRoute>
        {/* <Route exact path='/owners/:id' render={props => (<OwnerProperties {...props} />)}/> */}
        <Route exact path='/owners/:id' render={props => (<OwnerProperties {...props} />)}/>
        
      </OwnerPrivateRoute>
    </div>
    
  )
}

export default Owners
