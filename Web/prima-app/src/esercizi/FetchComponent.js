import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const FetchComponent = () => {
    const url="https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setUsers(result);
    }

    useEffect(() => {
        /*fetch(url)
        .then((response) => response.json())
        .then((ris) => setUsers(ris));*/
        getUsers()
    }, [])

  return (
    <>
    <h1>Fetch user from jsonplaceholder</h1>
    <div>
        {
            users.map((u) =>{
                return <p key = {u.id}>{u.name} {u.email}</p>
            })
        }
    </div>
    </>
  )
}

export default FetchComponent