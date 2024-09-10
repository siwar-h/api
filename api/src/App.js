import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [userList,setUserList]=useState([])
  
  const getUsers = async () => {
    try {

      const users = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUserList(users.data)

    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  
  return (
    <div className="App">
      <header className="App-header">
      {/* {
          userList?.length ? 
          userList.map((el,i)=>(
            <div>
              <hr></hr>
              <h1>User List</h1>
              <h1> Name: {el.name} </h1>
              <h1>User-Name: {el.username} </h1>
              <h1>Email: {el.email} </h1>
              <h1>Street: {el.address.street} </h1>
              <h1> City: {el.address.city} </h1>
              <hr></hr>
            </div>
          )) :
          <h1> Loading... </h1>
        } */}
       
      </header>
    </div>
  );
}

export default App;
