/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import "./UserList.css";
 
const EditUser = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateUser = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/users/${id}`,{
            name: name,
            time: time
        });
        
            history("/");
        
    }
 
    useEffect(() => {
        getUserById();
    }, []);
 
    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setTime(response.data.time);
    }
 
    return (
        <div align="center">
            <form onSubmit={ updateUser } >
                <div className="field">
                    <label className="label">Name:</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                {/* <div className="field">
                    <label className="label">Time:</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Time"
                        value={ time }
                        onChange={ (e) => setTime(e.target.value) }
                    />
                </div> */}

                <div className="selectWrapper">
                
                    <select onChange={ (e) => setTime(e.target.value) } className="selectBox">
                        
                        {/* className="input" */}
                        className= "control"
                        <option>Select your Batch</option>
                        <option>6AM - 7AM</option>
                        <option>7AM - 8AM</option>
                        <option>8AM - 9AM</option>
                        <option>5PM - 6PM</option>
                        value={ time }
                        {/* placeholder="Time" */}
                    </select>
                    
                </div>
 
                <div className="field">
                    <button className="button is-primary"> Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditUser