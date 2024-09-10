import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import UsersCard from './UsersCard';

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
      <h1 >User List</h1>
      <div className="container">
        <div className="row">
          {userList?.length ? (
            userList.map((user, i) => (
              <UsersCard key={i} user={user} /> 
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </header>
  </div>
       
     
  );
}

export default App;
