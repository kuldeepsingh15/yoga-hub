import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import AddUser from './AddUser';
import "./UserList.css";

 
const UserList = () => {
    const [users, setUser] = useState([]);
 
    useEffect(() => {
        getUsers();
    }, []);
 
    const getUsers = async () => {
        const response = await axios.get('https://yoga-backend-qovm.onrender.com/users');
        setUser(response.data);
    }
    
    const deleteUser = async (id) => {
        await axios.delete(`https://yoga-backend-qovm.onrender.com/users/${id}`);
        getUsers();
    }
 
    return (
        <div>
            <AddUser/>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Time</th>
                        <th>Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => (
                        <tr key={ user.id }>
                            <td>{ index + 1 }</td>
                            <td>{ user.name }</td>
                            <td>{ user.age }</td>
                            <td>{ user.time }</td>
                            <td>{ user.payment }</td>
                            <td>
                                <button><Link to={`/edit/${user.id}`} className="button is-small is-info kul">Edit</Link></button>
                                <button onClick={ () => deleteUser(user.id) } className="button is-small is-danger kul">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
export default UserList