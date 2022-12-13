import { Route, Routes } from 'react-router-dom'
import { AllTask } from '../../pages/AllTasks/AllTask'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login'
import { Profile } from '../../pages/Profile'
import { Progress } from '../../pages/Progress/Progress'
import { Register } from '../../pages/Register/Register'
import './AllRoutes.css'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/profile" element={<Profile />}>Profile</Route>
      <Route path="/allTask" element={<AllTask />}>All Tasks</Route>
      <Route path="/progress" element={<Progress />}>Progress</Route>
      <Route path="/done" element={<AllTask />}>All Tasks</Route>
      <Route path="/login" element={<Login />}>Login</Route>
      <Route path="/register" element={<Register />}>Register</Route>
    </Routes>
  )
}


