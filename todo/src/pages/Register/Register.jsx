import './register.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useDispatch } from 'react-redux';
import { getRegister } from '../../redux/Auth/action';


const initState ={
    name:"",
    email:"",
    password:""
}

export const Register = () => {
    const [user, setUser] = useState(initState)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) =>{
        let {name, value} = e.target;
        setUser({...user, [name]:value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(getRegister(user))
        // try {
        //         let res = await axios.post("http://localhost:3050/auth/register", user)
        //         console.log(res, "res");
        //         alert(res.data.message);
        //         navigate("/login");
        // } catch (error) {
        //         console.log(error.response.data.message)
        // }
        navigate("/login");
    }
    return (
        <div className='form' >
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor=''>Name</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name" required />
                <label htmlFor=''>Email</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" required />
                <label htmlFor=''>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" required/>
                <button type='submit' className='regisBtn'>Register</button>
                <div className='forLogin'>
                    <p>Already have an account ? <NavLink to="/login" className="registerLink">Login</NavLink></p>
                </div>
            </form>
        </div>
      )
}
