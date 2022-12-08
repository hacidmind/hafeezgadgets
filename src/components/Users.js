import React, { useEffect, useState } from 'react';

const Users = () => {

    // let URL = "https://my-json-server.typicode.com/hacidmind/deviceDb/blogs";
    let URL = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers] = useState([])
    useEffect(() => {
        // code block for fetching users
        fetch(`${URL}`)
            .then(response => response.json())
            // .then(json => console.log(json))
            .then((data) => {
                setUsers(data)
            })
    }, [URL])
    return (
        <div>
            <h1>Users</h1>

            {
                users.map((user) => (
                    <div key={user.id}>
                        <h2><b>Name</b>: {user.name}</h2>
                        <h2><b>Email Address</b>: {user.email}</h2>
                        <h2><b>Website</b>: {user.website}</h2>
                        <h2><b>Company</b>: {user.company.name}</h2>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Users;
