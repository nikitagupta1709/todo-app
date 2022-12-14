import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AllTask } from '../../pages/AllTasks/AllTask'
import { Done } from '../../pages/Done/Done'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login'
import { Official } from '../../pages/Official/Official'
import { Other } from '../../pages/Other/Other'
import { Personal } from '../../pages/Personal/Personal'
import { Progress } from '../../pages/Progress/Progress'
import { Register } from '../../pages/Register/Register'
import { SingleTask } from '../../pages/SingleTask/SingleTask'
import './AllRoutes.css'

export const AllRoutes = () => {
  const {loggedInUser} = useSelector((state)=>state)
  return (
    <Routes>
      <Route path="/" element={loggedInUser ?<Home />: <Login/>}>Home</Route>
      <Route path="/allTask" element={loggedInUser ?<AllTask /> : <Login/>}>All Tasks</Route>
      <Route path="/progress" element={loggedInUser ?<Progress />: <Login/>}>Progress</Route>
      <Route path="/done" element={loggedInUser ?<Done />: <Login/>}>Done</Route>
      <Route path="/personal" element={loggedInUser ?<Personal />: <Login/>}>Personal</Route>
      <Route path="/others" element={loggedInUser ?<Other />: <Login/>}>Other</Route>
      <Route path="/official" element={loggedInUser ?<Official />: <Login/>}>Official</Route>
      <Route path="/login" element={<Login />}>Login</Route>
      <Route path="/register" element={<Register />}>Register</Route>
      <Route path="/single/:id" element={loggedInUser ?<SingleTask/>: <Login/>}>Single</Route>

    </Routes>
  )
}


