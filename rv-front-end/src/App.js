import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
// import Catalog from './components/Catalog';
// import axios from 'axios'
import OwnerProperties from './components/OwnerProperties';
import OwnerLogin from './components/OwnerLogin';
import OwnerPrivateRoute from './components/OwnerPrivateRoute';
import Owners from './components/Owners';
import DummyBackend from './components/DummyBackend'
import OwnerRegistration from './components/OwnerRegistration';
import { AuthProvider} from './contexts/AuthContext';
import AddProperty from './components/AddProperty';
import UpdateProperty from './components/UpdateProperty';


function App() {
  // useEffect(() => {
  //   axios.get('https://cuylite.herokuapp.com/api/products', {
  //     headers: { 
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   }})
  //       .then(res => {
  //         console.log('res products', res);
  //       })
  //       .catch(err => {
  //         // console.log('err', err)
  //       })
  // }, []);


  return (
    <AuthProvider>
    <div className="App">
      <Navbar />

      <Route exact path='/backend' component={DummyBackend} />
      <Route exact path='/owners/login' component={OwnerLogin} />
      <Route exact path='/owners/signup' component={OwnerRegistration} />
      <Route exact path='/owners' component={Owners} />
      <Route exact path='/owners/:owner_id/new' component={AddProperty} />
      <Route exact path='/owners/:owner_id/:property_id' component={UpdateProperty} />
      {/* <OwnerPrivateRoute> */}
        <Route exact path='/owners/:owner_id' render={props => (<OwnerProperties {...props} />)}/>
        {/* <Route exact path='/owners/' render={props => (<OwnerProperties {...props} />)}/> */}
        
      {/* </OwnerPrivateRoute> */}
      {/* <Route exact path='/owners/' render={props => (<OwnerLogin {...props} />)}/> */}
      
    </div>
    </AuthProvider>
  );
}

export default App;
