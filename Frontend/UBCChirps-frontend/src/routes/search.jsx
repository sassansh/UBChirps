import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Navbar from '../components/navbar'

const Search = () => {
  return (
    <div className="search-page">
        <Navbar />
        <SearchBar />
    </div>
  )
}

const SearchBar = () => {
    const inputRef = useRef();
    const [users, setUsers] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(inputRef.current.value)
        const searchValue = inputRef.current.value

        //fetch data
        //TODO: change the fetch domain
        const url = `http://localhost:8000/api/users/search?name=${searchValue}`
        const res = await fetch(url);
        const users = await res.json();
        console.log(users)
        setUsers(users);
    }

    return (
      <div>
        <h4>Search User</h4>
        <form className="search-form" onSubmit={(e) => handleSubmit(e)} action="submit">
            <input ref={inputRef} type="text" />
            <button onSubmit={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }

  

export default Search