import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
// import Catalog from './components/Catalog';
// import axios from 'axios'
import OwnerProperties from './components/OwnerProperties';
import OwnerLogin from './components/OwnerLogin';
import OwnerPrivateRoute from './components/OwnerPrivateRoute';

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
    <div className="App">
      <Navbar />

      <Route exact path='/owners/' component={OwnerLogin} />
      <OwnerPrivateRoute>
        <Route exact path='/owners/:id' render={props => (<OwnerProperties {...props} />)}/>
      </OwnerPrivateRoute>
      {/* <Route exact path='/owners/' render={props => (<OwnerLogin {...props} />)}/> */}
      
    </div>
  );
}

export default App;
