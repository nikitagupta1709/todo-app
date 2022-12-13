import { Route, Routes } from 'react-router-dom'
import { AllTask } from '../../pages/AllTasks/AllTask'
import { Done } from '../../pages/Done/Done'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login'
import { Official } from '../../pages/Official/Official'
import { Other } from '../../pages/Other/Other'
import { Personal } from '../../pages/Personal/Personal'
import { Profile } from '../../pages/Profile'
import { Progress } from '../../pages/Progress/Progress'
import { Register } from '../../pages/Register/Register'
import { SingleTask } from '../../pages/SingleTask/SingleTask'
import './AllRoutes.css'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/profile" element={<SingleTask />}>Profile</Route>
      <Route path="/allTask" element={<AllTask />}>All Tasks</Route>
      <Route path="/progress" element={<Progress />}>Progress</Route>
      <Route path="/done" element={<Done />}>Done</Route>
      <Route path="/personal" element={<Personal />}>Personal</Route>
      <Route path="/others" element={<Other />}>Other</Route>
      <Route path="/official" element={<Official />}>Official</Route>
      <Route path="/login" element={<Login />}>Login</Route>
      <Route path="/register" element={<Register />}>Register</Route>
    </Routes>
  )
}


