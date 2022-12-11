import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

const initState ={
    email:"",
    password:""
}
export const Login = () => {
    const [user, setUser] = useState(initState)


    const handleChange = (e) =>{

    }

    const handleSubmit = ()=>{

    }
  return (
    <div className='form' >
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" required />
            <label htmlFor=''>Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" required/>
            <button type='submit' className='loginBtn'>Login</button>
            <div className='forRegister'>
                <p>Don't have an account ? <NavLink to="/register" className="registerLink">Register</NavLink></p>
            </div>
        </form>
    </div>
  )
}
