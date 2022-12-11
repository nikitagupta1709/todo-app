import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login'
import { Profile } from '../../pages/Profile'
import { Register } from '../../pages/Register/Register'
import './AllRoutes.css'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/profile" element={<Profile />}>Profile</Route>
      <Route path="/login" element={<Login />}>Login</Route>
      <Route path="/register" element={<Register />}>Register</Route>
    </Routes>
  )
}


