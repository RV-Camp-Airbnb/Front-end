import React from 'react'
import {Route} from "react-router-dom";
import OwnerProperties from './OwnerProperties';
import OwnerPrivateRoute from './OwnerPrivateRoute';

const Owners = () => {

  return (
    <div>
      <h1>hello from Owners</h1>
      {/* <OwnerPrivateRoute> */}
        {/* <Route exact path='/owners/:owner_id' render={props => (<OwnerProperties {...props} />)}/> */}
      {/* </OwnerPrivateRoute> */}
      {/* <Route exact path='/owners/:owner_id' render={props => (<OwnerProperties {...props} />)}/> */}
      <OwnerProperties/>
    </div>
    
  )
}

export default Owners
