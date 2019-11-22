import React, {useState,useEffect } from 'react';
import CatalogCard from './CatalogCard';
import axios from 'axios';


export const dummyData = [
  
  {
    id: 0,
    owner_id: 1,
    name: 'Ocean Cove Camp',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 50,
    state:'California',
    address: '23150 CA-1, Jenner, CA 95450',
    has_electicty: true,
    has_water: true,
    has_toilets: true,
    price: 35,
    img_url: 'https://images.unsplash.com/19/waves.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
  },
  {
    id: 1,
    owner_id: 1,
    name: 'Oregon Outback Station',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 600,
    state:'Oregon',
    address: '76231 OR-31, La Pine, OR 97739',
    has_electicty: false,
    has_water: false,
    has_toilets: true,
    price: 0,
    img_url: 'https://images.unsplash.com/photo-1563863564165-b9d60de8631b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: 2,
    owner_id: 2,
    name: 'Galbrath Mountain',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 4,
    state:'Washington',
    address: '4474 Friday Creek Rd, Burlington, WA 98233',
    has_electicty: false,
    has_water: false,
    has_toilets: false,
    price: 15,
    img_url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: 3,
    owner_id: 3,
    name: 'Bootleg Canyon',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 15,
    state:'Nevada',
    address: '1000 Yucca St, Boulder City, NV 89005',
    has_electicty: false,
    has_water: true,
    has_toilets: true,
    price: 25,
    img_url: 'https://images.unsplash.com/photo-1458777455172-e3f6e7805b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 4,
    owner_id: 3,
    name: 'Whitefish Lake',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: 35,
    state:'Montana',
    address: ' 1615 W Lakeshore Dr, Whitefish, MT 59937',
    has_electicty: true,
    has_water: true,
    has_toilets: true,
    price: 40,
    img_url: 'https://images.unsplash.com/photo-1515460431901-ee3a893425a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  }, 
  {
    id: 5,
    owner_id: 4,
    name: 'San Elijo',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sites: '60',
    state:'California',
    address: '2050 S Coast Hwy 101, Cardiff, CA 92007',
    has_electicty: true,
    has_water: true,
    has_toilets: true,
    price: 55,
    img_url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80'
  }

];
// console.log(dummyData)



const Catalog = () => {

const [listings, setListings] = useState(dummyData)
const [searchTerm, setSearchTerm] = useState('')


// useEffect(()=>{
//   axios.get('https://deplyrvpark.herokuapp.com/api/landOwner')
//   .then(res =>{console.log(res)})
//   .catch(err=>{console.log(err.response)})
// },[])

const handleChange = e => {
  setSearchTerm(e.target.value)
  }

const handleSearch = (input) =>{
  setListings(
    listings.filter(item =>{ 
      console.log(item)
      return item.state.toLowerCase().includes(input.toLowerCase())
    }))}


  return (
    <div>

      <form onSubmit={(e)=>{
        e.preventDefault()
      handleSearch(searchTerm)
      }}>
              <input type='text' placeholder = 'Search by State' onChange = {handleChange} required minLength ='1'></input>
            <button type='submit' onSubmit = {handleSearch} >Submit.</button>
              </form>

     {listings.map( (data, index) => {
              return <CatalogCard data = {data} key={index}/>
              
          })}
      
    </div>
  )
        }
        export default Catalog
