import './register.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const initState ={
    name:"",
    email:"",
    password:""
}

export const Register = () => {
    const [user, setUser] = useState(initState)


    const handleChange = (e) =>{
        let {name, value} = e.target;
        setUser({...user, [name]:value });
    }
    console.log(user, "user");

    const handleSubmit = ()=>{

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
