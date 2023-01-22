import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

const Search = () => {
  const [users, setUsers] = useState([])

  return (
    <div className="search-page">
        <Navbar />
        <SearchBar setUsers={setUsers}/>
        <SearchResult users={users} />
    </div>
  )
}

const SearchBar = ({setUsers}) => {
    const inputRef = useRef();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const searchValue = inputRef.current.value

        //fetch data
        //TODO: change the fetch domain
        const url = `http://localhost:8000/api/users/search?name=${searchValue}`
        const res = await fetch(url);
        const users = await res.json();
        setUsers(users);
    }

    return (
      <div style={{padding:20}}>
        <h4>Search User</h4>
        <form style={{display:"flex"}} onSubmit={(e) => handleSubmit(e)} action="submit">
            <input ref={inputRef} type="text" />
            <button onSubmit={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }

  const SearchResult = ({users}) => {
    return (
        <div style={{paddingLeft:20}}>
        {users.map(user => 

            <Link to={`../user/${user.googleId}`}>
                <div style={{display:"flex"}}>
                    <img style={{height: 25, width:25}} src={user.picture}/>
                    <div>{user.displayName}</div>    
                </div>
            </Link>
        )}
        </div>
    )
  }
  

export default Search