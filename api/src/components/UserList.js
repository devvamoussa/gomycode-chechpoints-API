import React , {useState , useEffect} from 'react';
import axios  from 'axios';
import './UserLIst.css'

function UserList() {
    const [users , setUsers] = useState([])

    useEffect (() =>{

        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        // handle success
        setUsers(response.data)
        console.log(response)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
    })
});
    


    return (
        <>
            
            {
                users.map(user => (
                    <div className="card-tous" className="row align-items-center card mt-5 card-md-4 shadow p-3 mb-5 bg-body rounded">
                        <div>
                            <img src="https://source.unsplash.com/random/200x200?sig=10" className="card-img-top" alt="image" /> 
                        </div>
                        <div class="card-body">
                            <ul className="col list-group">
                                <li className="list-group-item">{user.name}</li>
                                <li className="list-group-item">{user.username}</li>
                                <li className="list-group-item">{user.email}</li>
                            </ul>
                        </div>
                    </div>
                
                ))
            }
            
        </>
    )
}

export default UserList;
