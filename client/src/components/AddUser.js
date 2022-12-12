import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddUser = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [time, setTime] = useState('');
    const [payment, setPayment] = useState('500');
    const history = useNavigate();
 
    const saveUser = async (e) => {
        e.preventDefault();
        if(time === ""){alert("You forgot to select your Batch.");}
        else if(age<18 || age>65){
            alert("Please Check Age, only 18 to 65 yrs old people are allowed.");
        }
        else{
        await axios.post('http://localhost:5000/users',{
            name: name,
            mobile: mobile,
            email: email,
            age: age,
            time: time,
            payment: payment
        });
        window.location.reload();
        }
    }
    
    return (
        <div align="center">
        <h1>Yoga Registration Form</h1>
            <form onSubmit={ saveUser }>
                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        required
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Mobile"
                        value={ mobile }
                        required
                        onChange={ (e) => setMobile(e.target.value) }
                    />
                </div>

                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        required
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Age"
                        value={ age }
                        required
                        onChange={ (e) => setAge(e.target.value) }

                    />
                </div>

                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Payment : 500 (non-negotible)"
                        disabled
                        onChange={ (e) => setPayment(e) }
                    />
                </div>

                <div className="selectWrapper">
                
                    <select required onChange={ (e) => setTime(e.target.value) } className="selectBox">
                        
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
                    <button className="button is-primary">
                    Save
                    </button>
                </div>
            </form>
        </div>
    )
}
 
export default AddUser