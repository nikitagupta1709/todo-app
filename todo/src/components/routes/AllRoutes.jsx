import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home/Home'
import { Profile } from '../../pages/Profile'
import './AllRoutes.css'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route to="/" element={<Home />}>Home</Route>
      <Route to="/profile" element={<Profile />}>Profile</Route>
      <Route to="/allTask" element={<Profile />}>Profile</Route>
      <Route to="/profile" element={<Profile />}>Profile</Route>
      <Route to="/profile" element={<Profile />}>Profile</Route>
    </Routes>
  )
}


