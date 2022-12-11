import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getLogin } from '../../redux/Auth/action'
import './login.css'

const initState ={
    email:"",
    password:""
}
export const Login = () => {
    const [user, setUser] = useState(initState)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) =>{
        let {name, value} = e.target;
        setUser({...user, [name]:value });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getLogin(user))
        navigate("/")
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
